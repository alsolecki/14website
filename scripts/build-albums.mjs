#!/usr/bin/env node
// Lookup-assist script for bulk-populating src/data/albums.json.
//
// Reads a plain-text list of "Artist - Title" lines, looks each one up on
// MusicBrainz (for year + canonical title/artist), then asks the Cover Art
// Archive for a front-cover image URL keyed off the MusicBrainz release
// group. No API key needed for either service.
//
// Usage:
//   node scripts/build-albums.mjs [inputFile] [--merge]
//
//   inputFile   defaults to scripts/albums-input.txt
//   --merge     after drafting, append new entries directly into
//               src/data/albums.json (skips ids that already exist there).
//               Omit it to just review the draft first (recommended).
//
// Output:
//   scripts/output/albums-draft.json   drafted entries, ready to review/merge
//   scripts/output/albums-draft.md     human-readable report — matches,
//                                       low-confidence guesses, and misses
//
// Etiquette: MusicBrainz's unauthenticated API is capped at 1 request/sec
// and requires an identifying User-Agent — both are handled below. Cover
// Art Archive sits on a different host and isn't rate-limited the same way,
// but we still space calls out a little to be polite.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const USER_AGENT = 'AlbumsDraftBot/1.0 ( alex@thedesignminds.com )'
const MB_DELAY_MS = 1100 // MusicBrainz: max 1 req/sec, pad slightly
const CAA_DELAY_MS = 250
const MATCH_SCORE_THRESHOLD = 80 // below this, flag for manual review

const args = process.argv.slice(2)
const doMerge = args.includes('--merge')
const inputArg = args.find((a) => !a.startsWith('--'))
const inputPath = path.resolve(ROOT, inputArg || 'scripts/albums-input.txt')
const outDir = path.resolve(ROOT, 'scripts/output')
const draftJsonPath = path.join(outDir, 'albums-draft.json')
const draftReportPath = path.join(outDir, 'albums-draft.md')
const albumsJsonPath = path.resolve(ROOT, 'src/data/albums.json')
const categoriesPath = path.resolve(ROOT, 'src/data/categories.js')

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Both APIs occasionally blip with a transient 503/network error under
// normal use — retry a couple of times with backoff before giving up.
async function withRetry(fn, { retries = 2, backoffMs = 1500 } = {}) {
  let lastErr
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn()
    } catch (err) {
      lastErr = err
      if (attempt < retries) await sleep(backoffMs * (attempt + 1))
    }
  }
  throw lastErr
}

function slugify(artist, title) {
  const base = `${artist}-${title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return base
}

function todayIso() {
  return new Date().toISOString().slice(0, 10)
}

// Escapes Lucene special characters MusicBrainz's search parser cares about.
function escapeLucene(str) {
  return str.replace(/([+\-&|!(){}[\]^"~*?:\\/])/g, '\\$1')
}

async function mbSearchReleaseGroup(artist, title) {
  const query = `releasegroup:"${escapeLucene(title)}" AND artist:"${escapeLucene(artist)}"`
  const url = `https://musicbrainz.org/ws/2/release-group?query=${encodeURIComponent(query)}&fmt=json&limit=5`
  return withRetry(async () => {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT, Accept: 'application/json' } })
    if (!res.ok) throw new Error(`MusicBrainz HTTP ${res.status}`)
    const data = await res.json()
    return data['release-groups'] || []
  })
}

// Cover Art Archive's redirect sometimes lands on archive.org's bare apex
// domain rather than a per-item ia*.us.archive.org storage node, and that
// backend has been observed both hanging (routing issue) and returning a
// genuine 503 (overloaded) — both archive.org-side, not fixable here. A
// short timeout keeps one bad host from stalling the batch; a couple of
// retries only on 5xx gives transient overload a chance to clear, while a
// 404 (no art on file) is trusted immediately and never retried.
async function caaFrontUrl(mbid) {
  for (let attempt = 0; attempt <= 2; attempt++) {
    try {
      const res = await fetch(`https://coverartarchive.org/release-group/${mbid}/front`, {
        method: 'HEAD',
        redirect: 'follow',
        headers: { 'User-Agent': USER_AGENT },
        signal: AbortSignal.timeout(6000),
      })
      if (res.ok) return res.url
      if (res.status === 404) return null
      if (attempt < 2) { await sleep(1500 * (attempt + 1)); continue }
      return null
    } catch {
      if (attempt < 2) { await sleep(1500 * (attempt + 1)); continue }
      return null // includes timeouts against an unreachable redirect target
    }
  }
  return null
}

function parseInputLine(line) {
  // Format: "Artist - Title | topRank | cat1;cat2;cat3"
  // Only "Artist - Title" is required; the rest are optional.
  const [main, rankPart, catsPart] = line.split('|').map((s) => s?.trim())
  const dashIndex = main.indexOf(' - ')
  if (dashIndex === -1) return null
  const artist = main.slice(0, dashIndex).trim()
  const title = main.slice(dashIndex + 3).trim()
  if (!artist || !title) return null
  const topRank = rankPart ? Number(rankPart) : null
  const categories = catsPart
    ? catsPart.split(';').map((c) => c.trim()).filter(Boolean)
    : []
  return { artist, title, topRank: Number.isFinite(topRank) ? topRank : null, categories }
}

async function loadKnownCategories() {
  try {
    const mod = await import(categoriesPath)
    return new Set(mod.CATEGORIES || mod.default || [])
  } catch {
    return new Set()
  }
}

async function main() {
  if (!existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`)
    console.error('Create it (one "Artist - Title" per line) or pass a path as the first argument.')
    process.exit(1)
  }
  await mkdir(outDir, { recursive: true })

  const raw = await readFile(inputPath, 'utf8')
  const lines = raw
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))

  const knownCategories = await loadKnownCategories()

  const drafted = []
  const reviewNotes = []

  console.log(`Looking up ${lines.length} album(s)...\n`)

  for (const [i, line] of lines.entries()) {
    const parsed = parseInputLine(line)
    if (!parsed) {
      reviewNotes.push({ line, issue: 'Could not parse — expected "Artist - Title"' })
      console.log(`[${i + 1}/${lines.length}] SKIP (unparseable): ${line}`)
      continue
    }
    const { artist, title, topRank, categories } = parsed

    let candidates = []
    try {
      candidates = await mbSearchReleaseGroup(artist, title)
    } catch (err) {
      reviewNotes.push({ line, issue: `MusicBrainz lookup failed: ${err.message}` })
      console.log(`[${i + 1}/${lines.length}] FAIL "${artist} - ${title}": ${err.message}`)
      await sleep(MB_DELAY_MS)
      continue
    }

    const best = candidates[0]
    if (!best) {
      reviewNotes.push({ line, issue: 'No MusicBrainz match found — add manually' })
      console.log(`[${i + 1}/${lines.length}] MISS: ${artist} - ${title}`)
      await sleep(MB_DELAY_MS)
      continue
    }

    const score = best.score ?? 0
    const resolvedArtist = best['artist-credit']?.[0]?.name || artist
    const resolvedTitle = best.title || title
    const year = best['first-release-date']?.slice(0, 4) || ''
    const mbid = best.id

    await sleep(CAA_DELAY_MS)
    const coverUrl = (await caaFrontUrl(mbid)) || ''

    const unknownCategories = categories.filter((c) => knownCategories.size && !knownCategories.has(c))
    if (unknownCategories.length) {
      reviewNotes.push({
        line,
        issue: `Categories not in categories.js allow-list: ${unknownCategories.join(', ')}`,
      })
    }
    if (score < MATCH_SCORE_THRESHOLD) {
      reviewNotes.push({
        line,
        issue: `Low MusicBrainz confidence (score ${score}/100) — verify "${resolvedArtist} - ${resolvedTitle}" (${year}) is correct`,
      })
    }
    if (!coverUrl) {
      reviewNotes.push({ line, issue: 'No cover art resolved (missing on Cover Art Archive, or its redirect target timed out) — coverUrl left blank' })
    }

    drafted.push({
      id: slugify(resolvedArtist, resolvedTitle),
      title: resolvedTitle,
      artist: resolvedArtist,
      year: year ? Number(year) : null,
      coverUrl,
      rating: null,
      topRank,
      categories,
      notes: '',
      dateAdded: todayIso(),
      links: { spotify: '', discogs: '' },
      musicbrainzId: mbid, // provenance only — safe to delete, harmless if kept
    })

    console.log(
      `[${i + 1}/${lines.length}] OK (score ${score}): ${resolvedArtist} - ${resolvedTitle} (${year})${coverUrl ? '' : ' [no cover art]'}`
    )

    await sleep(MB_DELAY_MS)
  }

  await writeFile(draftJsonPath, JSON.stringify(drafted, null, 2) + '\n', 'utf8')

  const reportLines = [
    `# Albums draft report — ${todayIso()}`,
    '',
    `${drafted.length} of ${lines.length} line(s) drafted into \`albums-draft.json\`.`,
    '',
  ]
  if (reviewNotes.length) {
    reportLines.push('## Needs review', '')
    for (const note of reviewNotes) {
      reportLines.push(`- **${note.line}** — ${note.issue}`)
    }
  } else {
    reportLines.push('No issues flagged — every line matched with high confidence and cover art.')
  }
  await writeFile(draftReportPath, reportLines.join('\n') + '\n', 'utf8')

  console.log(`\nDrafted ${drafted.length}/${lines.length} albums.`)
  console.log(`  ${path.relative(ROOT, draftJsonPath)}`)
  console.log(`  ${path.relative(ROOT, draftReportPath)}  (${reviewNotes.length} item(s) flagged for review)`)

  if (doMerge) {
    const existingRaw = existsSync(albumsJsonPath) ? await readFile(albumsJsonPath, 'utf8') : '[]'
    const existing = JSON.parse(existingRaw)
    const existingIds = new Set(existing.map((a) => a.id))
    const toAdd = drafted.filter((a) => !existingIds.has(a.id))
    const skipped = drafted.length - toAdd.length
    const merged = [...existing, ...toAdd]
    await writeFile(albumsJsonPath, JSON.stringify(merged, null, 2) + '\n', 'utf8')
    console.log(`\nMerged ${toAdd.length} new album(s) into ${path.relative(ROOT, albumsJsonPath)}.`)
    if (skipped) console.log(`  Skipped ${skipped} that already had a matching id.`)
  } else {
    console.log('\nReview the draft, then re-run with --merge to append new entries into src/data/albums.json.')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

#!/usr/bin/env node
// Fills in coverUrl and links.spotify for albums in src/data/albums.json
// using the Spotify Web API, as a fallback/companion to the MusicBrainz +
// Cover Art Archive lookup in build-albums.mjs (which depends on
// archive.org's uptime for actual image bytes).
//
// Setup: create scripts/.env (gitignored) with:
//   SPOTIFY_CLIENT_ID=...
//   SPOTIFY_CLIENT_SECRET=...
// Get these from a free app at https://developer.spotify.com/dashboard.
//
// Usage:
//   node scripts/fetch-spotify-covers.mjs
//
// Only fills in fields that are currently empty — never overwrites an
// existing coverUrl or links.spotify.

import { readFile, writeFile } from 'node:fs/promises'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const envPath = path.join(__dirname, '.env')
const albumsPath = path.resolve(ROOT, 'src/data/albums.json')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function loadEnv(filePath) {
  const env = {}
  const raw = readFileSync(filePath, 'utf8')
  for (const line of raw.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim()
  }
  return env
}

if (!existsSync(envPath)) {
  console.error(`Missing ${path.relative(ROOT, envPath)} — create it with SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET.`)
  process.exit(1)
}
const env = loadEnv(envPath)
const CLIENT_ID = env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = env.SPOTIFY_CLIENT_SECRET
if (!CLIENT_ID || !CLIENT_SECRET || CLIENT_ID.includes('your_') || CLIENT_SECRET.includes('your_')) {
  console.error('SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET look unset or still placeholders — check scripts/.env')
  process.exit(1)
}

async function getAccessToken() {
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Spotify auth failed: HTTP ${res.status} ${body}`)
  }
  const data = await res.json()
  return data.access_token
}

async function runSearch(token, q) {
  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=album&limit=3`
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
  if (res.status === 429) {
    const retryAfter = Number(res.headers.get('Retry-After') || '2')
    await sleep((retryAfter + 1) * 1000)
    return runSearch(token, q)
  }
  if (!res.ok) throw new Error(`Spotify search HTTP ${res.status}`)
  const data = await res.json()
  return data.albums?.items || []
}

async function searchAlbum(token, artist, title) {
  // Field-qualified search is the more precise match, but Spotify's query
  // parser returns zero results in a couple of known cases: self-titled
  // albums (title === artist, e.g. "Beach House" by Beach House) and titles
  // containing an apostrophe (e.g. "Destroyer's Rubies"). Fall back to a
  // plain free-text query in those cases — it reliably surfaces the right
  // album as the top result.
  const qualified = await runSearch(token, `album:${title} artist:${artist}`)
  if (qualified.length) return qualified
  return runSearch(token, `${title} ${artist}`)
}

async function main() {
  console.log('Authenticating with Spotify...')
  const token = await getAccessToken()
  console.log('OK — token acquired.\n')

  const data = JSON.parse(await readFile(albumsPath, 'utf8'))
  let coversFound = 0, linksFound = 0, misses = 0, skipped = 0

  for (const [i, album] of data.entries()) {
    const needsCover = !album.coverUrl
    const needsLink = !album.links?.spotify
    if (!needsCover && !needsLink) { skipped++; continue }

    let results
    try {
      results = await searchAlbum(token, album.artist, album.title)
    } catch (err) {
      console.log(`[${i + 1}/${data.length}] ERROR ${album.artist} - ${album.title}: ${err.message}`)
      misses++
      await sleep(150)
      continue
    }

    const best = results[0]
    if (!best) {
      console.log(`[${i + 1}/${data.length}] MISS ${album.artist} - ${album.title}`)
      misses++
      await sleep(150)
      continue
    }

    if (needsCover && best.images?.length) {
      album.coverUrl = best.images[0].url // largest available
      coversFound++
    }
    if (needsLink && best.external_urls?.spotify) {
      album.links = album.links || {}
      album.links.spotify = best.external_urls.spotify
      linksFound++
    }
    console.log(`[${i + 1}/${data.length}] OK   ${album.artist} - ${album.title}`)

    await writeFile(albumsPath, JSON.stringify(data, null, 2) + '\n') // incremental save
    await sleep(150)
  }

  console.log(`\nDone. Covers found: ${coversFound} | Links found: ${linksFound} | Misses: ${misses} | Already complete (skipped): ${skipped}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

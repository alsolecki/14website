#!/usr/bin/env node
// Downloads every remote coverUrl in src/data/albums.json (Spotify CDN,
// Cover Art Archive/archive.org) into public/albums/covers/ and rewrites
// coverUrl to point at the local copy instead.
//
// Why: coverUrl currently hotlinks third-party CDNs. That's fine day to
// day, but there's no guarantee those URLs stay valid forever (Spotify
// image hashes, archive.org redirect targets) — if one ever breaks, the
// cover disappears from the site with nothing to fall back to. Vendoring
// the bytes into public/ makes the page's image supply independent of
// those services staying up or those specific URLs staying valid.
//
// Usage:
//   node scripts/localize-covers.mjs
//
// Idempotent: only fetches albums whose coverUrl is still a remote
// http(s) URL. Albums already pointing at /albums/covers/... are skipped,
// so re-running after adding a few new albums only fetches the new ones.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const albumsPath = path.resolve(ROOT, 'src/data/albums.json')
const coversDir = path.resolve(ROOT, 'public/albums/covers')
const publicUrlPrefix = '/albums/covers'

// Cover Art Archive originals can be multi-megabyte raw scans (one was
// 9MB) — way more than a ~300px grid thumbnail needs. Downscale everything
// to a single consistent size and re-encode as JPEG so the whole covers
// folder stays small regardless of source quality/format. 640px covers the
// largest Spotify delivers natively and is comfortably more than the grid
// cards (minmax(260px, 1fr)) need even at 2x pixel density.
const MAX_DIMENSION = 640
const JPEG_QUALITY = 82

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// archive.org (which Cover Art Archive URLs redirect to) is known to blip
// with transient 5xx from individual storage nodes — see the similar note
// in build-albums.mjs. Spotify's CDN doesn't need this, but retrying is
// harmless for it too.
async function downloadCover(album, { retries = 2, backoffMs = 1500 } = {}) {
  let lastErr
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(album.coverUrl)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const resized = await sharp(buf)
        .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: 'inside', withoutEnlargement: true })
        .flatten({ background: '#000' }) // in case a source PNG has alpha
        .jpeg({ quality: JPEG_QUALITY })
        .toBuffer()
      const filename = `${album.id}.jpg`
      await writeFile(path.join(coversDir, filename), resized)
      return `${publicUrlPrefix}/${filename}`
    } catch (err) {
      lastErr = err
      if (attempt < retries) await sleep(backoffMs * (attempt + 1))
    }
  }
  throw lastErr
}

async function main() {
  await mkdir(coversDir, { recursive: true })

  const data = JSON.parse(await readFile(albumsPath, 'utf8'))
  let downloaded = 0, skipped = 0, failed = 0

  for (const [i, album] of data.entries()) {
    if (!album.coverUrl || !album.coverUrl.startsWith('http')) {
      skipped++
      continue
    }

    try {
      const localUrl = await downloadCover(album)
      album.coverUrl = localUrl
      downloaded++
      console.log(`[${i + 1}/${data.length}] OK   ${album.artist} - ${album.title} -> ${localUrl}`)
    } catch (err) {
      failed++
      console.log(`[${i + 1}/${data.length}] FAIL ${album.artist} - ${album.title}: ${err.message}`)
    }

    await writeFile(albumsPath, JSON.stringify(data, null, 2) + '\n') // incremental save
    await sleep(100)
  }

  console.log(`\nDone. Downloaded: ${downloaded} | Already local (skipped): ${skipped} | Failed: ${failed}`)
  if (failed) console.log('Failed albums keep their original (remote) coverUrl — safe to re-run.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

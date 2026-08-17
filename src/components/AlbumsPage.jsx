import React, { useMemo, useState } from 'react'
import albumsData from '../data/albums.json'
import { CATEGORIES } from '../data/categories.js'
import './albums.css'

// Sorts entries with a topRank ascending (1, 2, 3, ...) and puts anything
// without a rank at the end — used for the Top 100 view.
const byTopRank = (a, b) => {
  if (a.topRank == null && b.topRank == null) return 0
  if (a.topRank == null) return 1
  if (b.topRank == null) return -1
  return a.topRank - b.topRank
}

// The Top 50's original sub-tiers (from the source ranking doc): 4, then 8,
// then 10, then 12, then 16 — cumulative rank cutoffs 4/12/22/34/50. These
// are positional (first N ranks, next N ranks, ...), not tied to which
// album occupies a given slot, so they stay valid even as individual ranks
// get reassigned.
const TOP50_TIER_BREAKS = [4, 12, 22, 34, 50]

// Buckets an already rank-sorted list into those tiers. The first bucket
// gets no label (it's the top of the page — a "1 – 4" header right above
// rank #1 would be redundant); every bucket after that is labeled with its
// rank range, same convention as the "51 – 100" break below it.
const splitIntoTiers = (sortedAlbums, breaks) => {
  const tiers = []
  let start = 0
  for (const end of breaks) {
    const albums = sortedAlbums.filter((a) => a.topRank > start && a.topRank <= end)
    if (albums.length > 0) {
      tiers.push({ label: start === 0 ? null : `${start + 1} – ${end}`, albums })
    }
    start = end
  }
  return tiers
}

const AlbumCard = ({ album }) => {
  // Covers are hotlinked from Spotify's CDN, which is generally stable but
  // not guaranteed — if a URL ever 404s, fall back to the same letter
  // placeholder used for albums that never had a coverUrl at all, rather
  // than showing a broken-image icon.
  const [coverFailed, setCoverFailed] = useState(false)
  const showCover = album.coverUrl && !coverFailed

  return (
    <div className="album-card">
      {album.topRank != null && (
        <div className="album-rank">#{album.topRank}</div>
      )}
      <div className="album-cover">
        {showCover ? (
          <img
            src={album.coverUrl}
            alt={`${album.title} cover art`}
            loading="lazy"
            decoding="async"
            onError={() => setCoverFailed(true)}
          />
        ) : (
          <div className="album-cover-placeholder">{album.title[0]}</div>
        )}
      </div>
      <div className="album-info">
        <h3>{album.title}</h3>
        <h4>{album.artist} &middot; {album.year}</h4>
        {album.rating != null && <p className="album-rating">★ {album.rating}/10</p>}
        {album.categories?.length > 0 && (
          <div className="album-tags">
            {album.categories.map((tag) => (
              <span className="album-tag" key={tag}>{tag}</span>
            ))}
          </div>
        )}
        {album.notes && <p className="album-notes">{album.notes}</p>}
        <div className="album-links">
          {album.links?.spotify && (
            <a href={album.links.spotify} target="_blank" rel="noreferrer">Spotify</a>
          )}
          {album.links?.discogs && (
            <a href={album.links.discogs} target="_blank" rel="noreferrer">Discogs</a>
          )}
        </div>
      </div>
    </div>
  )
}

const AlbumsPage = () => {
  const [view, setView] = useState('top100') // 'top100' | 'collection'
  const [activeCategory, setActiveCategory] = useState(null)
  const [search, setSearch] = useState('')

  // Split at 50/51 rather than reusing one sorted list — the two halves
  // render at different visual scales (see .albums-grid--secondary in
  // albums.css), so they need to be separate arrays, not just a shared
  // sort with a CSS cutoff.
  const top50 = useMemo(
    () => [...albumsData].filter((a) => a.topRank != null && a.topRank <= 50).sort(byTopRank),
    []
  )
  const next50 = useMemo(
    () => [...albumsData].filter((a) => a.topRank != null && a.topRank > 50).sort(byTopRank),
    []
  )
  const top50Tiers = useMemo(() => splitIntoTiers(top50, TOP50_TIER_BREAKS), [top50])

  const filteredCollection = useMemo(() => {
    const term = search.trim().toLowerCase()
    return [...albumsData]
      .filter((a) => (activeCategory ? a.categories?.includes(activeCategory) : true))
      .filter((a) =>
        term
          ? a.title.toLowerCase().includes(term) || a.artist.toLowerCase().includes(term)
          : true
      )
      .sort((a, b) => a.artist.localeCompare(b.artist))
  }, [activeCategory, search])

  return (
    <section className="albums-page">
      {/* Named "albums-content" rather than the generic "content" used by
          the ProjectB/C/E/F cards — that class carries a global
          `.content img { filter: invert(.9) }` rule (src/index.css) meant
          for their mockup screenshots, which was inverting every Spotify
          album cover on this page too. */}
      <div className="albums-content">
        <div className="wrapper">
          <h1>Albums</h1>
          <h2>{view === 'top100' ? 'Top 100 Albums' : 'Full Collection'}</h2>

          <div className="albums-view-toggle">
            <button
              className={view === 'top100' ? 'active' : ''}
              onClick={() => setView('top100')}
            >
              Top 100
            </button>
            <button
              className={view === 'collection' ? 'active' : ''}
              onClick={() => setView('collection')}
            >
              Full Collection ({albumsData.length})
            </button>
          </div>

          {view === 'collection' && (
            <div className="albums-filters">
              <input
                type="text"
                placeholder="Search title or artist..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="category-chips">
                <button
                  type="button"
                  className={`category-chip ${activeCategory === null ? 'active' : ''}`}
                  aria-pressed={activeCategory === null}
                  onClick={() => setActiveCategory(null)}
                >
                  All
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    className={`category-chip ${activeCategory === cat ? 'active' : ''}`}
                    aria-pressed={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {view === 'top100' && (
            <>
              {top50Tiers.map((tier, i) => (
                <React.Fragment key={i}>
                  {tier.label && (
                    <div className="albums-tier-divider albums-tier-divider--minor">
                      <span>{tier.label}</span>
                    </div>
                  )}
                  <div className="albums-grid">
                    {tier.albums.map((album) => (
                      <AlbumCard key={album.id} album={album} />
                    ))}
                  </div>
                </React.Fragment>
              ))}

              {next50.length > 0 && (
                <>
                  <div className="albums-tier-divider">
                    <span>51 – 100</span>
                  </div>
                  <div className="albums-grid albums-grid--secondary">
                    {next50.map((album) => (
                      <AlbumCard key={album.id} album={album} />
                    ))}
                  </div>
                </>
              )}

              {top50.length === 0 && (
                <p>No albums have a topRank set yet — add one in albums.json to see it here.</p>
              )}
            </>
          )}

          {view === 'collection' && (
            <>
              <div className="albums-grid">
                {filteredCollection.map((album) => (
                  <AlbumCard key={album.id} album={album} />
                ))}
              </div>
              {filteredCollection.length === 0 && <p>No albums match that search/filter.</p>}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default AlbumsPage

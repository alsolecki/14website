import React, { useMemo, useState } from 'react'
import albumsData from '../data/albums.json'
import { CATEGORIES } from '../data/categories.js'
import './albums.css'

// Sorts entries with a topRank ascending (1, 2, 3, ...) and puts anything
// without a rank at the end — used for the Top 50 view.
const byTopRank = (a, b) => {
  if (a.topRank == null && b.topRank == null) return 0
  if (a.topRank == null) return 1
  if (b.topRank == null) return -1
  return a.topRank - b.topRank
}

const AlbumCard = ({ album, showRank }) => (
  <div className="album-card">
    {showRank && album.topRank != null && (
      <div className="album-rank">#{album.topRank}</div>
    )}
    <div className="album-cover">
      {album.coverUrl ? (
        <img src={album.coverUrl} alt={`${album.title} cover art`} />
      ) : (
        <div className="album-cover-placeholder">{album.title[0]}</div>
      )}
    </div>
    <div className="album-info">
      <h3>{album.title}</h3>
      <h4>{album.artist} &middot; {album.year}</h4>
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

const AlbumsPage = () => {
  const [view, setView] = useState('top50') // 'top50' | 'collection'
  const [activeCategory, setActiveCategory] = useState(null)
  const [search, setSearch] = useState('')

  const top50 = useMemo(
    () => [...albumsData].filter((a) => a.topRank != null).sort(byTopRank),
    []
  )

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
      <div className="content">
        <div className="wrapper">
          <h1>Albums</h1>
          <h2>Top 50 Albums</h2>

          <div className="albums-view-toggle">
            <button
              className={view === 'top50' ? 'active' : ''}
              onClick={() => setView('top50')}
            >
              Top 50
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
                <span
                  className={`category-chip ${activeCategory === null ? 'active' : ''}`}
                  onClick={() => setActiveCategory(null)}
                >
                  All
                </span>
                {CATEGORIES.map((cat) => (
                  <span
                    key={cat}
                    className={`category-chip ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="albums-grid">
            {(view === 'top50' ? top50 : filteredCollection).map((album) => (
              <AlbumCard key={album.id} album={album} showRank={view === 'top50'} />
            ))}
          </div>

          {view === 'top50' && top50.length === 0 && (
            <p>No albums have a topRank set yet — add one in albums.json to see it here.</p>
          )}
          {view === 'collection' && filteredCollection.length === 0 && (
            <p>No albums match that search/filter.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default AlbumsPage

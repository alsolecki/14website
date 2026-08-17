// Allow-list of category/tag names for albums.json.
//
// Keeping this as a single source of truth avoids the classic tagging-drift
// problem where you end up with "90s" on one album and "1990s" on another.
// When you add a new tag while entering an album, add it here too.
//
// Feel free to reorganize these into whatever groupings make sense to you —
// genre, era, mood, format, etc. are just a starting point. The app doesn't
// care about the grouping, only that every string used in an album's
// `categories` array also appears somewhere in this list.

export const CATEGORIES = [
  // Genre
  'Rock',
  'Electronic',
  'Hip-Hop',
  'Jazz',
  'Folk',
  'Singer-Songwriter',
  'Pop',
  'Metal',
  'Punk',
  'Ambient',

  // Era
  '1960s',
  '1970s',
  '1980s',
  '1990s',
  '2000s',
  '2010s',
  '2020s',

  // Mood / occasion
  'Headphones album',
  'Rainy day listening',
  'Road trip',
  'Late night',

  // Personal collections (distinct from genre/era — used for curated lists)
  'Underrated',
  'Currently obsessed',
  'Alumni', // once ranked in the Top 50, since fallen to a lower tier — but keeps this status

  // Life stage (when you first got into it)
  'Middle School',
  'High School',
  'College',
  'Young Adult',
  'Mid Adult',
  'Post Claudia',

  // Near-miss tier — from the original Top 50 shortlist, ranked below the
  // cut but still worth keeping track of
  'Top Bubble',
  'Mid Bubble',
  'Low Bubble',
  'Bubble Out',
]

export default CATEGORIES

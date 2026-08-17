import { Routes, Route } from 'react-router-dom'
import ThreeBackground from './components/ThreeBackground.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Contact from './components/Contact.jsx'
import SiteNavBar from './components/navBar/SiteNavBar.jsx'
import AlbumsPage from './components/AlbumsPage.jsx'

// NOTE: this is the first time this codebase actually uses <Routes>/<Route> —
// BrowserRouter was already wrapping <App /> in main.jsx but nothing used it.
// Everything that used to render unconditionally on the homepage (Hero +
// Contact) is now scoped to the "/" route inside HomePage below, so it only
// shows up on the homepage and not on /albums.
//
// The unused `Content`/`ProjectB/E/F` import from the original App.jsx was
// dropped here since it wasn't being rendered — re-add it inside HomePage
// (or its own route) whenever those project sections are ready to go live.

function HomePage() {
  return (
    <>
      <Hero />
      <div className="blankBox2"></div>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

function App() {
  return (
    <>
      <ThreeBackground />
      <SiteNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/albums" element={<AlbumsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

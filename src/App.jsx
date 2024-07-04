
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Contact from './components/Contact.jsx'
import Content from './components/Content.jsx'
import SiteNavBar from './components/navBar/SiteNavBar.jsx'

function App() {

  return (
    <>
      <SiteNavBar />
      <Hero />
      <Content />
      <>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </>
    </>
  )
}

export default App

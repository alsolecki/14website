import React from 'react'
import htmlSVG from './html-file-icon.svg'
import cssSVG from './css-file-icon.svg'
import { Link } from 'react-router-dom'

const ProjectA = () => {
  return (
    <section>
        <div className="content">
          <h1>1</h1>
          <span className="icons">
            <h2>SoFoCo Dems</h2>
            <img src={ htmlSVG } alt="HTML Icon" width="20px" height="20px"/>
            <img src={ cssSVG } alt="CSS Icon" width="20px" height="20px"/>
          </span>
          <h4>A Neighborhood Flier</h4>
          <p>
            In 2020, I designed an 8-1/2 x 11 flier with Adobe Suites for a local Democratic organization called "SoFoCo", which stands for "South Four Corners". The flier was intended to be printed and handed out at elections and events. It is essentially a contact sheet with all the organization's local resources and contact information, plus all currently elected county, state and nationally officials.
          </p>
          <h4>Bringing the Flier Online</h4>
          <p>
            In the fall of 2022, after county and state elections took place, the fliers needed updating. It wasn't until the start of my coding journey in the spring of 2023 that I realized this would be a great project to apply my new  web-development skills. I translated the flier into a web-friendly version with HTML and CSS. I made a few minor tweaks to the flier but kept the same overall design, ensuring that page would neatly print out from the browser to an 8-1/2 x 11 sheet. 
          </p>
          <h4>Beyond the Flier</h4>
          <p>
            In translating the flier from a print-based layout to a web-friendly version, it became clear there are many ways to improve the design. First, I intent to apply responsive web design techniques to improve viewing on mobile browsers. Then, I'd like to add additional layers of information like imagery, news and a calender of events so users can dive deeper. Ideally, this flier will serve as the start to a full-fledged "SoFoCoDems" web-site!
          </p>
          <p><Link to="https://sofocoflier.netlify.app">check it out</Link></p>
      </div>
    </section>
  )
}

export default ProjectA
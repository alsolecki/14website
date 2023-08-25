import React from 'react'
import htmlSVG from './html-file-icon.svg'
import cssSVG from './css-file-icon.svg'


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
          In 2020, I designed a physical 8.5 * 11 flier with Adobe Suites for a local Democratic organization called "SoFoCo", which stands for "South Four Corners". The flier is essentially a contact sheet with all the organization's local resources and contact information. It also lists all county, state and nationally elected officials.
        </p>
        <h4>Bringing the Flier Online</h4>
        <p>
          In the fall of 2022, after county and state elections took place, the flyers needed updating. It wasn't until the start of my coding journey in the spring of 2023 that I realized this would be a great project to learn about web-development. I translated the flier into a web-friendly version with HTML and CSS. I made a few tweaks here and there but kept the same design to the flier. I made sure that page would nicely print out on 8-1/2 x 11 pages with media queries.
        </p>
        <h4>Beyond the Flier</h4>
        <p>
          In taking the flier to the next steps, I'd like redo the design of flier to make it a dynamic web experience. I'd apply responsive web design techniques to have the design geared towards mobile browsers. 
        </p>

    </div>
    </section>
  )
}

export default ProjectA
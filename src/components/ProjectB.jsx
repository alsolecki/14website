import React from 'react'
import { Link } from 'react-router-dom'

const ProjectB = () => {
  return (
    <section>
      <div className="content">
        <div className="wrapper">
          <h1>ExhibitGallery</h1>
          <h2>ExhibitGallery</h2>
          <h4>Exhibit Design Portfolio</h4>
          <p>
            I spent 14 years working as an exhibit designer and throughout that span I helped create dozens of unique displays and museum environments.

            Clients have a message they want to share through the exhibits and visitors want to learn and create memorable and meaningful experiences. There's a lot of complexity and variables that must be considered to make a quality museum experience. I understand it requires good communication and cooperation amongst many different parties to make these a reality.
          </p>
          <h4>Broad Experiences</h4>
          <p>
            By working on a wide variety of projects of different sizes I was able to wear many different hats. I worked directly with historians, architects, general contractors, media producers, artifact mounters, lighting designers, museum directors and carpenters. As a senior designer, I also trained and directed junior level designers. I believe that only through experience can a designer's connections form and toolkits expand.
          </p>
          <p><Link to="https://exhibitgallery.netlify.app">check it out</Link></p>
        </div>

      </div>
    </section>
  )
}

export default ProjectB
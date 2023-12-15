import React from 'react'
import { Link } from 'react-router-dom'

const ProjectB = () => {
  return (
    <section>
      <div className="content">
        <div className="wrapper">
          <h1>Exhibits</h1>
          <h2>Exhibits</h2>
          <h4>Exhibit Design Projects</h4>
          <p>
            I spent 14 years working as an exhibit designer and throughout that span I helped <strong>create dozens of unique displays</strong> and museum environments.
            Clients have a message they want to share through the exhibits and visitors want to learn and create <strong>memorable and meaningful experiences</strong>. There's a lot of complexity and variables that must be considered to make a quality museum experience. I understand it requires <strong>good communication and cooperation</strong> amongst many different parties to make these a reality.
          </p>
          <p>
            By working on <strong>a wide variety of projects of different sizes</strong> I was able to wear many different hats. I worked directly with historians, architects, general contractors, media producers, artifact mounters, lighting designers, museum directors and carpenters. As a senior designer, I also <strong>trained and directed junior level designers</strong>. I believe that only through experience can a designer's connections form and toolkits expand.
          </p>

          <h4>Drawings & Renderings</h4>
          <p>
            I've learned to use many different types of drawings to communicate. <strong>Quick sketches</strong> are helpful for generating ideas and collaborating with other designers. <strong>Plans, Elevations and Details</strong> are useful when working with architects, general contractors and fabricators. <strong>Specialty Drawings</strong> are helpful for AV systems or Content location plans. <strong>Vignettes</strong> are useful for outlining interactives or other unique points of interest. <strong>AXO and Perspective Views</strong> allow clients to understand the space three-dimensionally and <strong>renderings</strong> are fully developed 3D scenes, primarily for marketing.
          </p>
         
          <p><Link to="https://exhibitgallery.netlify.app">check it out</Link></p>
        </div>

      </div>
    </section>
  )
}

export default ProjectB
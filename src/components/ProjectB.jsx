import React from 'react'
import htmlSVG from './html-file-icon.svg'
import cssSVG from './css-file-icon.svg'
import jsSVG from './js-file-icon.svg'

const ProjectB = () => {
  return (
    <section>
        <div className="content">
        <h1>2</h1>
        <span className="icons">
        <h2>Exhibits Gallery</h2>
        <img src={ htmlSVG } alt="HTML Icon" width="20px" height="20px"/>
        <img src={ cssSVG } alt="CSS Icon" width="20px" height="20px"/>
        <img src={ jsSVG } alt="JS Icon" width="20px" height="20px"/>
        </span>
        <h4>My Portfolio as an Exhibit Designer</h4>
        <p>
            I spent 14 years working as an exhibit designer and throughout that span I helped create dozens of unique displays and museum environments. Though my career has shifted towards software development, there are many achievements I want to highlight through these projects and what it took get them done.
        </p>
        <h4>Working as a Team</h4>
        <p>
            Clients have a message they want to share through the exhibits and visitors want to learn and create memorable and meaningful experiences. There's a lot of complexity and variables that must be considered to make a quality museum experience. I understand it requires good communication and cooperation amongst many different parties to make these a reality. 
        </p>
        <h4>Broad Experiences</h4>
        <p>
            By working on a wide variety of projects of different sizes I was able to wear many different hats. On various projects I worked with historians, architects, general contractors, media producers, artifact mounters, lighting designers, museum directors and carpenters. As a senior designer, I also trained and directed junior level designers.  
        </p>
        <h4>Adding Layers</h4>
        <p>
            I've started with a gallery of final images from several exhibit projects. I'm using HTML, CSS and JavaScript to create a dynamic presentation. I'd like to add more layers of details into each of these project presentations.
        </p>
        </div>
    </section>
  )
}

export default ProjectB
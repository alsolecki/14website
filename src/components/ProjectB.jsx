import React from 'react'
import { Link } from 'react-router-dom'

const ProjectB = () => {
  return (
    <section>
        <div className="content">
            <h1>project 2</h1>
            <h2>Exhibit Gallery</h2>
            <span className="icons">
                <div><h5>HTML</h5></div>
                <div><h5>CSS</h5></div>
                <div><h5>JavaScript</h5></div>
            </span>
            <h4>Exhibit Designer Portfolio</h4>
            <p>
                I spent 14 years working as an exhibit designer and throughout that span I helped create dozens of unique displays and museum environments. Though my career has shifted towards software development, there are many achievements I want to highlight through these projects and what it took get them done.
            </p>
            <h4>Working as a Team</h4>
            <p>
                Clients have a message they want to share through the exhibits and visitors want to learn and create memorable and meaningful experiences. There's a lot of complexity and variables that must be considered to make a quality museum experience. I understand it requires good communication and cooperation amongst many different parties to make these a reality. 
            </p>
            <h4>Broad Experiences</h4>
            <p>
                By working on a wide variety of projects of different sizes I was able to wear many different hats. I worked directly with historians, architects, general contractors, media producers, artifact mounters, lighting designers, museum directors and carpenters. As a senior designer, I also trained and directed junior level designers.  
            </p>
            <h4>Adding Layers</h4>
            <p>
                I've started with a simple gallery of images from several exhibit projects. I'm using HTML, CSS and JavaScript to create a dynamic presentation. Going forward, I'd like to add more images and layers of details into each of these project presentations.
            </p>
            <p><Link to="https://exhibitgallery.netlify.app">check it out</Link></p>
        </div>
    </section>
  )
}

export default ProjectB
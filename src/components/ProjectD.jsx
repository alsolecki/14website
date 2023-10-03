import React from 'react'
import { Link } from 'react-router-dom'

const ProjectA = () => {
  return (
    <section>
        <div className="content">
          <h1>project 3</h1>
          <h2>BarnYard</h2>
          <span className="icons">
            <div><h5>HTML</h5></div>
            <div><h5>CSS</h5></div>
            <div><h5>JavaScript</h5></div>
            <div><h5>React.JS</h5></div>
          </span>
          <h4>Barnyard/Playground </h4>
          <p>
            Farm animals are deeply ingrained in our society and are one of the first things young children learn about. It's easy to identify different farm animals because of their unique sounds, sizes, shapes and other characteristics. I envision this app as a playground for myself, testing out different user interface techniques in the context of a barnyard setting.
          </p>
          <h4>Words of Wisdom</h4>
          <p>
            An early features allow users to access random quotes from an API. I'd like each barnyard character to provide a set of animations and actions like providing quotes or fun facts. 
          </p>
         
          <p><Link to="https://sofocoflier.netlify.app">check it out</Link></p>
      </div>
    </section>
  )
}

export default ProjectA
import React from 'react'
import { Link } from 'react-router-dom'

const ProjectE = () => {
  return (
    <section>
        <div className="content">
          <h1>project 2</h1>
          <h2>WannaWatch</h2>
          <span className="icons">
            <div><h5>HTML</h5></div>
            <div><h5>CSS</h5></div>
            <div><h5>JavaScript</h5></div>
            <div><h5>React.JS</h5></div>
          </span>
          <h4>A Movie List</h4>
          <p>
            WannaWatch is an app that allows users to create a list of movies they want to watch.
          </p>
         
          <p><Link to="https://wanna-watch.netlify.app/">check it out</Link></p>
      </div>
    </section>
  )
}

export default ProjectE
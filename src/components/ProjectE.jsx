import React from 'react'
import { Link } from 'react-router-dom'

const ProjectE = () => {
  return (
    <section>
        <div className="content">
        <div className="wrapper">
          <h1>WannaWatch</h1>
          <h2>WannaWatch</h2>
          <h4>Intro to MVP</h4>
          <p>
            WannaWatch is an app that allows users to create a list of movies they want to watch. Though it's essentially a simple to-do list, it's helped me understand the concept of <strong>Minimal Viable Product</strong>.
          </p>
         
          <p><Link to="https://wanna-watch.netlify.app/">check it out</Link></p>
        </div>
      </div>
    </section>
  )
}

export default ProjectE
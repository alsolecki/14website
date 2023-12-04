import React from 'react'
import { Link } from 'react-router-dom'

const ProjectG = () => {
  return (
    <section>
        <div className="content">
        <div className="wrapper">
          <h1>Websites</h1>
          <h2>Websites</h2>
          <h4>SuperPowers</h4>
          <p>
             One of the coolest things about learning to code has been the feeling that you've gained superpowers. With enough time, will-power and access to the internet, anyone can learn to make computers do what they want! 
          </p>
          <h4>JapaneseLearningProgram</h4>
          <p>
            My mother-in-law is a high school Japanese language teacher. I created a website for her to highlight the program.
          </p>
         
          <p><Link to="https://rubberduckieouterspace.netlify.app//">check it out</Link></p>
        </div>
      </div>
    </section>
  )
}

export default ProjectG
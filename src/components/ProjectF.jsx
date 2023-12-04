import React from 'react'
import { Link } from 'react-router-dom'

const ProjectF = () => {
  return (
    <section>
      <div className="content">
        <div className="wrapper">
          <h1>RubberDuckie</h1>
          <h2>RubberDuckie</h2>
          <h4>Going Three-D</h4>
          <p>
            After learning the basics of HTML, CSS and JavaScript, I wanted to apply these tools to 3D graphic spaces. That led me <Link to="https://rubberduckieouterspace.netlify.app//"><strong>Three.js</strong></Link> and <strong>WebGL</strong>, short for Web Graphics Library, a JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins.
          </p>
          <h4>Lift Off!</h4>
          <p>
            It was now clear to me that the potential of creating 3D web-based experiences with WebGL is virtually limitless! It's also really complex! My first project utilizing these libraries is RubberDuckieInOuterSpace. I've always loved the imagery of a cartooney character getting electrocuted and thus launched into outer space. There'd been a steady rise of rubber duckies in my milieu, so what better subject to blast off into the abbyss!
          </p>

          <p><Link to="https://rubberduckieouterspace.netlify.app//">check it out</Link></p>
        </div>
      </div>
    </section>
  )
}

export default ProjectF
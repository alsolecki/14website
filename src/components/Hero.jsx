import React from 'react'
import headshot from '../assets/AS-headshot-2023.jpg'

const Hero = () => {
  return (
    <section className="hero">

      <img className="headshot" src={headshot} alt="headshot of Alex Solecki" />
      <br></br>
      <p>With a formal background in both <strong>industrial design</strong> and <strong>exhibit design</strong>, I've recently added <strong>web development</strong> to my professional skill set. When I'm not designing, coding or enjoying time with my wife and three-year old daughter, you can find me stuck in traffic or cooking.
      </p>
      <br></br>
      <p>The Latin word 'ars' signifies skilled work; it did not mean art as we might understand it today, but a craft activity demanding a high level of technical ability.</p>

      <button> <a href="mailto:alsolecki@gmail.com">Contact Me</a></button>
    </section>
  )
}

export default Hero

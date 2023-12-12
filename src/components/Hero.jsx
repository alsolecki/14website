import React from 'react'
import headshot from '../assets/AS-headshot-2023.jpg'
import ArsDesignLogo from './navBar/arsDesignLogo'

const Hero = () => {
  return (
    <section className="hero">
        <h1>Hello, I'm Alex.</h1>
        <h3>designer & web developer</h3>
        <img className="headshot"src={ headshot } alt="headshot of Alex Solecki" /> 
        <p>With a formal background in both <strong>industrial design</strong> and <strong>exhibit design</strong>, I've recently added <strong>web development</strong> to my professional skill set. When I'm not designing, coding or spending time with my wife and one-year old daughter, you can find me cooking, gardening or playing tennis.
        </p>

        <ArsDesignLogo />

        {/* <h2>ars design</h2>

        <h3>The Letters ARS are my initials</h3>

        <p>The Latin word 'ars' signifies skilled work; it did not mean art as we might understand it today, but a craft activity demanding a high level of technical ability including tapestry weaving, goldsmith's work or embroidery.</p>
 */}

        <button> <a href="mailto:alsolecki@gmail.com">Contact Me</a></button>
    </section>
  )
}

export default Hero


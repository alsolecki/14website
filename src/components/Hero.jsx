import React from 'react'
import headshot from '../assets/AS-headshot-2023.jpg'

const Hero = () => {
  return (
    <section className="hero">
        <h1>Hello, I'm Alex.</h1>
        <h3>I am a designer & web developer</h3>
        <img className="headshot"src={ headshot } alt="headshot of Alex Solecki" /> 
        <p>With a formal background in industrial and exhibit design, I've recently added programming to my skill set. When I'm not coding or spending time with my wife and one-year old daughter, you can find me cooking, gardening or playing tennis. Check out some of my projects below!
        </p>
        <p>The Latin word 'ars' signified skilled work; it did not mean art as we might understand it today, but a craft activity demanding a high level of technical ability including tapestry weaving, goldsmith's work or embroidery.</p>


        <button> <a href="mailto:alsolecki@gmail.com">Contact Me</a></button>
    </section>
  )
}

export default Hero


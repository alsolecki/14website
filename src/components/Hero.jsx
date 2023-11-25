import React from 'react'
import headshot from '../assets/AS-headshot-2023.jpg'

const Hero = () => {
  return (
    <section className="hero">
        <h1>Hello, I'm Alex.</h1>
        <h3>I am a front-end developer & designer</h3>
        <img className="headshot"src={ headshot } alt="headshot of Alex Solecki" /> 
        <p>With a formal background in industrial and exhibit design, I've recently shifted my focus towards front-end software development. When I'm not coding or spending time with my wife and one-year old daughter, you can find me cooking, gardening or playing tennis. Please check out some of my projects below!
        </p>
        <button> <a href="mailto:alsolecki@gmail.com">Contact Me</a></button>
    </section>
  )
}

export default Hero


import React from 'react'
import headshot from '../assets/AS-headshot_2018.jpg'

const Hero = () => {
  return (
    <section className="hero">
        <h1>Hello, I'm Alex.</h1>
        <h3>I am a front-end developer & designer</h3>
        <img className="headshot"src={ headshot } alt="headshot of Alex Solecki" /> 
        <p>With a formal background in industrial and exhibit design, I'm looking to shift my focus towards a career in software development. When I'm not coding, I enjoy cooking, gardening, tennis and spending time with my wife and one-year old daughter. Please check out some of my projects below!
        </p>
        <button> <a href="mailto:alsolecki@gmail.com">Contact Me</a></button>
    </section>
  )
}

export default Hero


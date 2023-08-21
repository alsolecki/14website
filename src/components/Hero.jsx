import React from 'react'
import headshot from '../assets/AS-headshot_2018.jpg'

const Hero = () => {
  return (
    <header className="hero">
        <div className="namebox">
          <h1>Hello, I'm Alex.</h1>
          <h3>I am a front-end developer & designer</h3>
          <button> <a href="mailto:alsolecki@gmail.com">Contact Me</a></button>
        </div>
        <img className="headshot"src={ headshot } alt="headshot of Alex Solecki" />
        
    </header>
  )
}

export default Hero
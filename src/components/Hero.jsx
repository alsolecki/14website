import React from 'react'
import headshot from '../assets/AS-headshot_2018.jpg'

const Hero = () => {
  return (
    <section className="hero">
        <h1>Hello, I'm Alex.</h1>
        <h3>I am a front-end developer & designer</h3>
        <img className="headshot"src={ headshot } alt="headshot of Alex Solecki" /> 
        <p>Velit non ipsum fugiat aliqua adipisicing ad proident consequat esse ex. Nulla qui magna id duis excepteur enim quis. Aliquip reprehenderit enim do commodo enim laborum in officia. Sunt voluptate laborum fugiat occaecat pariatur. Tempor anim officia sit voluptate quis.
        </p>
        <button> <a href="mailto:alsolecki@gmail.com">Contact Me</a></button>
    </section>
  )
}

export default Hero


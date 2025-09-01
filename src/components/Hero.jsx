import headshot from '../assets/AS-headshot-2023.jpg'
import headshot2 from '../assets/AS_Headshot2025.png'

const Hero = () => {
  return (
    <section className="hero">
      <img className="headshot2" src={headshot2} alt="headshot of Alex Solecki" />
      <button> <a href="mailto:alsolecki@gmail.com">Contact Me</a></button>
    </section>
  )
}

export default Hero

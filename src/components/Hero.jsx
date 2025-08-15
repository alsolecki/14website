import headshot from '../assets/AS-headshot-2023.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <img className="headshot" src={headshot} alt="headshot of Alex Solecki" />
      <button> <a href="mailto:alsolecki@gmail.com">Contact Me</a></button>
    </section>
  )
}

export default Hero

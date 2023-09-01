import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toySVG from "./toy-duck-icon.svg";
import homeSVG from "./home-icon.svg";
import './Navbar2.css'

const Navbar2 = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
        <div className="home">
            <a href="https://alsolecki.com/">
            <img src={ homeSVG } alt="Home Icon" width="24px" height="20px"/></a>
        </div>
            {/* hamburger */}
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        <ul className={ menuOpen ? "open" : ""}>
            <li><Link to="https://sofocoflier.netlify.app">SoFoCoDems</Link></li>
            <li><Link to="https://exhibitgallery.netlify.app">ExhibitGallery</Link></li>
            <li><Link to="https://foodclock.netlify.app">FoodClock</Link></li>

            <li> 
                <a href="https://babyouterspace.netlify.app/">
                <img src={ toySVG } alt="Toy Duck Icon" width="16px" height="16px"/></a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar2
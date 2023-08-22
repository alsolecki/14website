import React from 'react'
import homeSVG from "./home-icon.svg";
import maleSVG from "./male-icon.svg";
import toySVG from "./toy-duck-icon.svg";

const Navbar = () => {
  
  // const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`
  // console.log(randomColor);

  return (
    <>
      <div className="nav-bar"
            style={{ backgroundColor: 'transparent' }}>
        <div id="button" className="button-home" >
            <a href="https://alsolecki.com/">
            <img src={ homeSVG } alt="Home Icon" width="24px" height="24px"/></a>
        </div>
        <div 
          id="button"
          className="button-project"
          // style="color: red"
          >
            <a href="https://sofocoflier.netlify.app/"><h3>SoFoCo Dems</h3></a>
        </div>
        <div id="button" className="button-project">
            <a href="https://exhibitgallery.netlify.app/"><h3>Exhibit Gallery</h3></a>
        </div>
        <div id="button" className="button-project">
            <a href="https://foodclock.netlify.app/"><h3>FoodClock</h3></a>
        </div>
        <div id="button" className="button-home">
            <a href="https://babyouterspace.netlify.app/">
            <img src={ toySVG } alt="Toy Duck Icon" width="18px" height="18px"/></a>
        </div>
        <div id="button" className="button-home">
            <a href="https://alsolecki.com/index.html#contact">
            <img src={ maleSVG } alt="Male Icon" width="24px" height="24px"/></a>
        </div>
      </div>
    </>
  )
}

export default Navbar
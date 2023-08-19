import React from 'react'

const Navbar = () => {
  
  const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`
  
  console.log(randomColor);

  return (
    <>
      <div className="nav-bar"
            style={{ backgroundColor: randomColor }}>
        <div id="button" className="button-home" >
            <a href="https://alsolecki.com/">
            <img src="public/home-icon.svg" alt="Home Icon" width="20px" height="20px"/></a>
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
            <img src="public/toy-duck-icon.svg" alt="Toy Duck Icon" width="20px" height="20px"/></a>
        </div>
        <div id="button" className="button-home">
            <a href="https://alsolecki.com/">
            <img src="public/male-icon.svg" alt="Male Icon" width="20px" height="20px"/></a>
        </div>
      </div>
    </>
  )
}

export default Navbar
import React from 'react'

const Navbar = () => {
  
      console.log(`hsl(${Math.random() * 360}, 100%, 75%)`)

  return (
    <>
      <div className="nav-bar">
        <div id="button" className="button-home">
            <a href="https://www.alsolecki.com/"> <h4>Home</h4></a>
        </div>
        <div id="button" className="button-project">
            <a href="https://www.alsolecki.com/sofocodems"><h3>SoFoCo Dems</h3></a>
        </div>
        <div id="button" className="button-project">
            <a href="https://www.alsolecki.com/exhibits"><h3>Exhibit Gallery</h3></a>
        </div>
        <div id="button" className="button-project">
            <a href="https://www.alsolecki.com/foodclock"><h3>FoodClock</h3></a>
        </div>
        <div id="button" className="button-home">
            <a href="https://babyouterspace.netlify.app/"><h4>Contact</h4></a>
        </div>
      </div>
    </>
  )
}

export default Navbar
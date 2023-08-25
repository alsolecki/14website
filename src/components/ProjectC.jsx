import React from 'react'
import htmlSVG from './html-file-icon.svg'
import cssSVG from './css-file-icon.svg'
import jsSVG from './js-file-icon.svg'
import reactSVG from './react-js-icon.svg'

const ProjectC = () => {
  return (
    <section>
        <div className="content">
        <h1>3</h1>
        <span className="icons">
        <h2>FoodClock</h2>
        <img src={ htmlSVG } alt="HTML Icon" width="20px" height="20px"/>
        <img src={ cssSVG } alt="CSS Icon" width="20px" height="20px"/>
        <img src={ jsSVG } alt="JS Icon" width="20px" height="20px"/>
        <img src={ reactSVG } alt="React JS Icon" width="20px" height="20px"/>
        </span>
        <h4>A Way to Track Cravings</h4>
        <p>
          FoodClock is a way to track your favorite foods and keep track of the last time you enjoyed the food and the approximate time needed until you will feel like having it again for maximum enjoyment. I want to incorporate a "meter-like" visual clock element that mimic's the user's craving level. This is still in development. 
        </p>
        <h4>Object Oriented Programming</h4>
        <p>
          At the heart of FoodClock is a database of my personal favorite foods. I needed have to understand how information is stored and shared in today's tech world before I could make an app to manipulate it and gain functionality. It was also necessary to learn how to capture information through inputs.
        </p>
        <h4>API and Google Maps</h4>
        <p>
          Besides the clock functionality, I wanted to include a geographic element. I utilize the google maps API to include where the foods are located.
        </p>


    </div>
    </section>
  )
}

export default ProjectC
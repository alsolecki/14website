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
          "FoodClock" is a way to organize your favorite foods and keep track of how often you have them. The goal of the app is to target the ideal frequency between eating these favorite foods so as to achieve optimal enjoyment. As Epicurus says, "Be moderate in order to enjoy the joys of life in abundance." Each favorite food will include a gauge-like timer element to visually represent the user's craving level.
        </p>
        <h4>Object Oriented Programming</h4>
        <p>
          At the heart of "FoodClock" is a database of the user's favorite foods. Before building an app to manipulate this type of information, I needed have to understand how data is stored and shared in digitally. This served as my introduction to object oriented programming and using forms to capture information.
        </p>
        <h4>API and Google Maps</h4>
        <p>
          Outside of the main "FoodClock" functionality, I want to include a geographic element. I'm planning to utilize the google maps API to include where the favorite foods are located and perhaps create a custom map.
        </p>
    </div>
    </section>
  )
}

export default ProjectC
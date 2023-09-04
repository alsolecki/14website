import React from 'react'
import { Link } from 'react-router-dom'

const ProjectC = () => {
  return (
    <section>
        <div className="content">
        <h1>project 3</h1>
        <h2>FoodClock</h2>
        <span className="icons">
            <div><h5>HTML</h5></div>
            <div><h5>CSS</h5></div>
            <div><h5>JavaScript</h5></div>
            <div><h5>React.js</h5></div>
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
        <p><Link to="https://foodclock.netlify.app">check it out</Link></p>
    </div>
    </section>
  )
}

export default ProjectC
import React from 'react'
import { Link } from 'react-router-dom'

const DropdownDev = ( {devSubMenuOpen, setDevSubMenuOpen}) => {
    return (
        <div className="dropdown">
            <ul
                className={devSubMenuOpen ? "webdev-submenu" : "webdev-submenu closed"}
                onClick={() => setDevSubMenuOpen(!devSubMenuOpen)}
            >
                <li><a href="https://learn-japanese-at-blair.netlify.app/" target="_blank" rel="noopener noreferrer">JPL</a></li>
                <li><Link to="https://wanna-watch.netlify.app">WannaWatch</Link></li>
                <li><Link to="http://sparkcoachingllc.com/" target="_blank" rel="noopener noreferrer">SparkCoaching</Link></li>
                <li><Link to="https://thedesignminds.com/" target="_blank" rel="noopener noreferrer">TDM</Link></li>
                <li><Link to="https://rubberduckieouterspace.netlify.app">RubberDuckie</Link></li>
            </ul>
        </div>
    )
}

export default DropdownDev
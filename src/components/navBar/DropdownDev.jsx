import React from 'react'
import { Link } from 'react-router-dom'

const DropdownDev = ( {devSubMenuOpen, setDevSubMenuOpen}) => {
    return (
        <div className="dropdown">
            <ul
                className={devSubMenuOpen ? "webdev-submenu" : "webdev-submenu closed"}
                onClick={() => setDevSubMenuOpen(!devSubMenuOpen)}
            >
                <li><Link to="https://exhibitgallery.netlify.app">Exhibits Gallery</Link></li>
                <li><Link to="https://wanna-watch.netlify.app">WannaWatch</Link></li>
                <li><Link to="https://learn-japanese-at-blair.netlify.app/">JPL</Link></li>
                <li><Link to="https://rubberduckieouterspace.netlify.app">RubberDuckie</Link></li>
            </ul>
        </div>
    )
}

export default DropdownDev
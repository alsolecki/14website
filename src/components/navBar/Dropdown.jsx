import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ( {subMenuOpen, setSubMenuOpen}) => {
    return (
        <div className="dropdown">
            <ul
                className={subMenuOpen ? "exhibits-submenu" : "exhibits-submenu closed"}
                onClick={() => setSubMenuOpen(!subMenuOpen)}
            >
                <li><Link to="/">Projects</Link></li>
                <li><Link to="/">Drawings</Link></li>
                <li><Link to="/">Renderings</Link></li>
            </ul>
        </div>
    )
}

export default Dropdown
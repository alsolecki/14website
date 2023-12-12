import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './SiteNavBar.css'
import Dropdown from './Dropdown.jsx'
import ArsDesignLogo from './arsDesignLogo.jsx'
import DropdownDev from './DropdownDev.jsx'

const SiteNavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [devSubMenuOpen, setDevSubMenuOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    });

    return (
        <nav ref={menuRef}>
            <div className="home">
                <a href="https://alsolecki.com/">
                    <ArsDesignLogo />
                </a>
            </div>
            <div className="menu" onClick={() => { setMenuOpen(!menuOpen) }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "open" : "unopen"} >

                <li><Link to="https://alsolecki.com/">Home</Link></li>

                <li
                    onMouseEnter={() => setSubMenuOpen(true)}
                    onMouseLeave={() => setSubMenuOpen(false)}
                >
                    {subMenuOpen && <Dropdown subMenuOpen="subMenuOpen" setSubMenuOpen="setSubMenuOpen" />}
                    <Link to="/">Exhibits</Link>
                </li>

                <li
                    onMouseEnter={() => setDevSubMenuOpen(true)}
                    onMouseLeave={() => setDevSubMenuOpen(false)}
                >
                     {devSubMenuOpen && <DropdownDev devSubMenuOpen="devSubMenuOpen" setDevSubMenuOpen="setDevSubMenuOpen" />}
                    <a href="/">
                        Web Dev
                    </a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default SiteNavBar;
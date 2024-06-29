import React from 'react';
import './NavBar.css';
import  linkedinLogo from '../assets/linkedin.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const homeLink = "/";
   
    const projectLink = "/Projects";

    return (
        <nav className="navbar">
            <div className="navbar-brand">MEGAN <br />MORRIS</div>
            <div className={`navbar-links ${showMenu ? 'show' : ''}`}>
                <NavLink exact to={homeLink} className="navbar-link">About</NavLink>
                <NavLink to={projectLink} className="navbar-link">Portfolio</ NavLink>
                <NavLink to={homeLink} className="navbar-link">Writing</NavLink>
                <a href="https://www.linkedin.com" className="navbar-link linkedin-link">
                    Let's Connect
                    <img src={linkedinLogo} alt="linkedin logo" className="linkedin-logo" />
                </a>
            </div>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default NavBar;
import React, { useState } from 'react';
import './Navbar.css';
import { GoDownload } from "react-icons/go";



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Musili Andrew</div>
            <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#about">About Me</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#blogs">Blogs</a></li>
                <li><a href="./Assets/onlinecv.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">Resume <GoDownload /></a></li>
            </ul>
        </nav>
    );
}

export default Navbar;


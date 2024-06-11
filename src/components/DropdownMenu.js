import React from 'react';
import './DropdownMenu.css';
import { FaGithub, FaLinkedin, FaCodepen, FaInstagram, FaTwitter, FaGoodreads } from "react-icons/fa";
import { Link } from 'react-scroll';

const DropdownMenu = ({ isOpen, setMenuOpen }) => {
  return (
    <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
      <ul className="dropdown-menu__list">
        <li><Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
        <li><Link to="skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>SKILLS</Link></li>
        <li><Link to="experience" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>EXPERIENCE</Link></li>
        <li><Link to="projects" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>WORKS</Link></li>
        <li><Link to="education" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>EDU</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
      </ul>
      <p className="dropdown-menu__footer">Designed & Coded by Musili Andrew</p>
      <div className="dropdown-menu__socials">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://codepen.io" target="_blank" rel="noopener noreferrer"><FaCodepen /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://goodreads.com" target="_blank" rel="noopener noreferrer"><FaGoodreads /></a>
      </div>
    </div>
  );
};

export default DropdownMenu;

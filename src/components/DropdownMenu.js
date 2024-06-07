// src/components/DropdownMenu.js
import React from 'react';
import './DropdownMenu.css';
import { FaGithub, FaLinkedin, FaCodepen, FaInstagram, FaTwitter, FaGoodreads } from "react-icons/fa";

const DropdownMenu = ({ isOpen }) => {
  return (
    <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
      <ul className="dropdown-menu__list">
        <li>ABOUT</li>
        <li>SKILLS</li>
        <li>EXPERIENCE</li>
        <li>WORKS</li>
        <li>EDU</li>
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

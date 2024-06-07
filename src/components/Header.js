import React from 'react';
import './Header.css';
import { HiOutlineSun } from "react-icons/hi2";
import { HiMenuAlt2 } from "react-icons/hi";
const Header = () => {
  return (
    <header className="header">
        <button className="header__button"><HiMenuAlt2 /></button>
      <div className="header__title">{'{ Musili.Andrew }'}</div>
      <div className="header__buttons">
        <button className="header__button"><HiOutlineSun /></button>
        <button className="header__button">Resume</button>
      </div>
    </header>
  );
}

export default Header;

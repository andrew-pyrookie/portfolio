import React, { useState } from 'react';
import './Header.css';
import { HiOutlineSun } from "react-icons/hi2";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { RiDownloadLine } from "react-icons/ri";
import DropdownMenu from './DropdownMenu';
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div className="header__left">
        <button className="header__menu-button" onClick={toggleMenu}>{isMenuOpen ? <IoClose /> : <HiMenuAlt2 />}</button>
        <div className="header__title">{'{ Dev.Musili.Andrew }'}</div>
      </div>
      <div className="header__right">
        <button className="header__icon-button"><HiOutlineSun /></button>
        <button className="header__resume-button">Resume <RiDownloadLine /></button>
      </div>
      <DropdownMenu isOpen={isMenuOpen} />
    </header>
  );
}

export default Header;

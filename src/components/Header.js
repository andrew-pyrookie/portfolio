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

  const handleDownload = () => {
    // Make sure 'onlinecv.pdf' is in the 'public' folder
    const pdfUrl = process.env.PUBLIC_URL + '/onlinecv.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf'; // Optional: Set a name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      <div className="header__left">
        <button className="header__menu-button" onClick={toggleMenu}>{isMenuOpen ? <IoClose /> : <HiMenuAlt2 />}</button>
        <div className="header__title">{'{ Dev.Musili.Andrew }'}</div>
      </div>
      <div className="header__right">
        <button className="header__icon-button"><HiOutlineSun /></button>
        <button className="header__resume-button" onClick={handleDownload}>Resume <RiDownloadLine /></button>
      </div>
      <DropdownMenu isOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}

export default Header;

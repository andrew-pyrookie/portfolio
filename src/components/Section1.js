// src/components/MainSection.js
import React from 'react';
import './Section1.css';
import profilePic from './Assets/myphoto.jpeg'; // Replace with the path to your profile picture

const Section1 = () => {
  return (
    <main className="main">
      <div className="main__text">
        <h1 className="main__title">Frontend Engineer + <br /> Full-stack Developer</h1>
        <p className="main__description">
          Frontend Engineer using HTML, CSS, JavaScript, TypeScript, React, and Nextjs. Backend using Node, Express, SQL, Postgres & Prisma ORM. I can assist in building robust web, mobile, and desktop applications.
        </p>
        <button className="main__resume-button">Open Resume</button>
      </div>
      <div className="main__image">
        <img src={profilePic} alt="Profile" className='main_image'/>
      </div>
    </main>
  );
}

export default Section1;

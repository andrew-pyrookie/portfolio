// src/components/AboutSection.js
import React from 'react';
import './AboutSection.css';
import profilePic from './Assets/myphoto.jpeg'; // Replace with the path to your profile picture

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">About Me</h2>
        <p className="about__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p className="about__text">
          My journey started in 2017, when I was unable to buy a laptop, my grandmother bought me a laptop. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p className="about__text">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <button className="about__button">Open LinkedIn</button>
      </div>
      <div className="about__image-container">
        <img src={profilePic} alt="Profile" className="about__image" />
      </div>
    </section>
  );
}

export default AboutSection;

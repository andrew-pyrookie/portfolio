import React from 'react';
import './AboutSection.css';
import profilePic from './Assets/myphoto.jpeg'; // Replace with the path to your profile picture

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">About Me</h2>
        <p className="about__text">
          I began my development journey in 2017, focusing on design, branding, UX/UI, and WordPress. This led to founding my own design and development agency in 2018.
        </p>
        <p className="about__text">
          From 2020, I expanded my skills into programming languages like HTML, CSS, JavaScript, Python, C, C++, and C#. To deepen my understanding, I completed fundamental computer science courses from reputable institutions like Harvard and other online platforms.
        </p>
        <p className="about__text">
          I further developed my expertise through certifications and courses from industry leaders like Meta, IBM, and Google, alongside resources like Udemy. I have extensively studied JavaScript and React documentation. And I love to read documentations.
        </p>
        <p className="about__text">
          Currently, I'm passionate about GoLang (especially the Gin Framework) and fascinated by the advancements in artificial intelligence and its potential for positive impact. I have a strong desire and aptitude for continuous learning.
        </p>
        <p className="about__text">
          I'm a quick learner with a proven track record of achieving exceptional frontend performance.
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

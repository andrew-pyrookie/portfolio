import React from 'react';
import './AboutSection.css';
import profilePic from './Assets/myphoto1.png'; // Replace with the path to your profile picture

const AboutSection = () => {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/musili-andrew07/", "_blank");
  };

  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">About Me</h2>
        <p className="about__text">
          Enthusiastic and driven professional with a Bachelor of Science in Mathematics and Computer Science from Kenyatta University. Skilled in software development and data analysis with experience in React, Python-Django, and SQL.
        </p>
        <p className="about__text">
          Currently engaged in freelance work with Turing, while actively contributing to platforms like Upwork and Fiverr. Passionate about technical writing and continually enhancing my expertise through ongoing studies and certifications.
        </p>
        <p className="about__text">
          My GitHub portfolio showcases a strong foundation in open-source contributions, demonstrating discipline and dedication. I'm committed to leveraging technology to solve complex challenges and eager to bring my skills to new opportunities.
        </p>
        <button className="about__button" onClick={openLinkedIn}>Open LinkedIn</button>
      </div>
      <div className="about__image-container">
        <img src={profilePic} alt="Profile" className="about__image" />
      </div>
    </section>
  );
}

export default AboutSection;

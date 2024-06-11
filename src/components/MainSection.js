import React from 'react';
import './MainSection.css';
import profilePic from './Assets/myphoto.png'; // Replace with the path to your profile picture

const MainSection = () => {
  return (
    <main className="main">
      <div className="main__text">
        <h1 className="main__title">
          <span className="main__title-grey">Software Developer +</span>  <br /> 
          <span className="main__title-gradient">Data Scientist</span>
        </h1>
        <p className="main__description">
          Full-stack developer proficient in React, JavaScript, HTML, CSS, and Python. Skilled in data analysis with Matplotlib, Pandas, and NumPy.
        </p>
        <p className="main__description">
          Key Skills:
          <ul>
            <li>Frontend: React, JavaScript, HTML, CSS, Bootstrap</li>
            <li>Backend: Python-Django, Node.js, Express, SQL, Postgres, Prisma ORM</li>
            <li>Data Analysis: Matplotlib, Pandas, NumPy, Anaconda</li>
            <li>Other: GitHub, Kaggle, open-source contributions</li>
          </ul>
        </p>
        <p className="main__description">
          Passionate about leveraging technology to solve complex challenges and eager to bring my skills to new opportunities.
        </p>

        <button className="main__resume-button">Open Resume</button>
      </div>
      <div className="main__image">
        <img src={profilePic} alt="Profile" className='main__profile-pic'/>
      </div>
    </main>
  );
}

export default MainSection;

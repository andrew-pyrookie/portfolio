import React from 'react';
import './HeroSection.css'; // Import the CSS file for styling
import profileImage from './Assets/myphoto.jpeg'; // Import the image
import backgroundImage from './Assets/background.jpg'; // Import the background image

function HeroSection() {
    return (
        <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-content">
                <div className="text-content">
                    <h2>I am</h2>
                    <h1>Musili Andrew</h1>
                    <p>Contemplative coder and analyst. Inspired by tough problems.</p>
                    <a href="#projects" className="btn">My Projects</a>
                </div>
                <div className="image-content">
                    <img src={profileImage} alt="Musili Andrew" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;

import React, { useState, useEffect } from 'react';
import './project.css';


const Projectshow = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the value to adjust slide transition time in milliseconds

    return () => clearInterval(intervalId);
  }, [images.length]); // Only re-run effect if images array changes

  const handlePrev = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slideshow">
      <button onClick={handlePrev}>Prev</button>
      <img src={images[currentImage].src} alt={images[currentImage].alt} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Projectshow;

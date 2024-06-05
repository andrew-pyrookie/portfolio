import React from 'react';
import HeroSection from './components/hero-section';
import Navbar from './components/Navbar';
import './App.css';
import Services from './components/Services';
import Projectshow from './components/projects';

function App() {
  const images = [
    {src: './components/Assets/image1.jpg', alt: 'Image 1'},
    {src: './components/Assets/image2.jpg', alt: 'Image 2'},
  ]
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
      <Services/>
      <Projectshow images={images}/>
    </div>
  );
}

export default App;

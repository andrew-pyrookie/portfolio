import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className="services">
      <h2>My Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>UX/UI Design</h3>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out and typesetting layouts.
          </p>
        </div>
        <div className="service-card">
          <h3>Graphic Design</h3>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out and typesetting layouts.
          </p>
        </div>
        <div className="service-card">
          <h3>Web Design</h3>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out and typesetting layouts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

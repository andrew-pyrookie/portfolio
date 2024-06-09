// src/components/EducationSection.js
import React from 'react';
import './EducationSection.css';
import { education } from '../data/education';

const EducationSection = () => {
  return (
    <section className="education">
      <h2 className="education__title">Education + Certificates</h2>
      <p className="education__description">
      I hold a Bachelor's degree in Mathematics and Computer Science, with a major in Statistics. My commitment to continuous learning is demonstrated by the numerous certificates I have obtained from various platforms. These include certificates in web development, data science, and specific skills such as NumPy and Pandas. These credentials reflect my dedication to staying current in my field and continuously enhancing my expertise.
      </p>
      <div className="education__grid">
        {education.map((certificate, index) => (
          <a key={index} href={certificate.link} className="education__card" target="_blank" rel="noopener noreferrer">
            <img src={certificate.imageUrl} alt={certificate.title} className="education__image" />
            <p className="education__text">{certificate.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

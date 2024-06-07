// src/components/EducationSection.js
import React from 'react';
import './EducationSection.css';
import { education } from '../data/education';

const EducationSection = () => {
  return (
    <section className="education">
      <h2 className="education__title">Education + Certificates</h2>
      <p className="education__description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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

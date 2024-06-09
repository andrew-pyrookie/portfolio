import React, { useState } from 'react';
import './JobExperienceSection.css';
import { experiences } from '../data/experience';

const JobExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="job-experience">
      <h2 className="job-experience__section-title">Job Experience</h2>
      <p className="job-experience__description">
      I have accumulated a diverse range of experiences in various roles, showcasing my adaptability and growth in the tech industry.
      </p>
      <div className="job-experience__grid">
        {experiences.map((experience, index) => (
          <div key={index} className={`job-experience__card ${activeIndex === index ? 'active' : ''}`} onClick={() => handleToggle(index)}>
            <div className="job-experience__header">
              <span className="job-experience__year">{experience.year}</span>
              <div>
                <span className="job-experience__title-small">{experience.title}</span>
                <span className="job-experience__company">{experience.company} - {experience.duration} / {experience.location} - {experience.type}</span>
              </div>
            </div>
            {activeIndex === index && <p className="job-experience__details">{experience.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobExperienceSection;

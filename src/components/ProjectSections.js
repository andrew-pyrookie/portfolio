import React from 'react';
import './ProjectSection.css';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">Projects I've Built</h2>
      <p className="projects__description">
        I have a proven track record of building projects from the ground up, including SaaS applications. My process emphasizes thorough planning and user-centric design. I start by collaborating with stakeholders to understand business needs and user goals. Then, I focus on information architecture and design, creating wireframes and UI designs that ensure a seamless user experience (UX). Next, I build MVPs followed by the development of the full product using Frontend, Backend and Database and Deployment. Finally, I prioritize performance optimization and ensure applications are production-ready.
      </p>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <div key={index} className="projects__card">
            <img src={project.imageUrl} alt={project.title} className="projects__image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

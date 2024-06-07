// src/components/SkillTree.js
import React from 'react';
import './SkillTree.css';

const SkillTree = ({ skills }) => {
  return (
    <section className="skill-tree">
      <h2 className="skill-tree__title">My Skills</h2>
      <div className="skill-tree__container">
        {skills.map((category, index) => (
          <div key={index} className="skill-tree__category">
            <h3 className="skill-tree__category-title">{category.category}</h3>
            <div className="skill-tree__skills">
              {category.skills.map((skill, index) => (
                <span key={index} className="skill-tree__skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillTree;

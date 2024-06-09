// src/components/CodeSnippetsSection.js
import React from 'react';
import './codeSnippet.css';
import { codeSnippets } from '../data/codeSnippets';

const CodeSnippetsSection = () => {
  return (
    <section className="code-snippets">
      <h2 className="code-snippets__title">Programming Problem I've Solved</h2>
      <p className="code-snippets__description">
      I have developed a range of solutions to various programming problems, including building machine learning prediction models, creating automation scripts, and developing task-handling programs. My machine learning models have been used for predicting trends and making data-driven decisions, while my automation scripts have streamlined repetitive tasks, saving time and increasing efficiency. Additionally, I have built robust task-handling programs to manage and organize workflows effectively.
      </p>
      <div className="code-snippets__grid">
        {codeSnippets.map((snippet, index) => (
          <a key={index} href={snippet.link} className="code-snippets__card" target="_blank" rel="noopener noreferrer">
            <img src={snippet.imageUrl} alt={snippet.title} className="code-snippets__image" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default CodeSnippetsSection;

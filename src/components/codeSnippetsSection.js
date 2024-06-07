// src/components/CodeSnippetsSection.js
import React from 'react';
import './CodeSnippetsSection.css';
import { codeSnippets } from '../data/codeSnippets';

const CodeSnippetsSection = () => {
  return (
    <section className="code-snippets">
      <h2 className="code-snippets__title">Programming Problem I've Solved</h2>
      <p className="code-snippets__description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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

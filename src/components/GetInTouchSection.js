// src/components/GetInTouchSection.js
import React from 'react';
import './GetInTouchSection.css';

const GetInTouchSection = () => {
  return (
    <section className="get-in-touch">
      <h2 className="get-in-touch__title">Get in Touch</h2>
      <p className="get-in-touch__description">
      If you'd like to learn more about my skills or get in touch, please feel free to reach out to me!
      </p>
      <button className="get-in-touch__button">Say Hello</button>
      <div className="get-in-touch__socials">
        <a href="https://github.com/andrew-pyrookie" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/musili-andrew07/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-codepen"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/musili_andrewG" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://goodreads.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-goodreads"></i>
        </a>
      </div>
      <p className="get-in-touch__footer">
        Designed and Coded by <a href="https://github.com">Musili Andrew</a>. Built with ReactJs, Module CSS and Framer Motion, Deployed with Vercel.
      </p>
    </section>
  );
};

export default GetInTouchSection;

// src/components/GetInTouchSection.js
import React from 'react';
import './GetInTouchSection.css';

const GetInTouchSection = () => {
  return (
    <section className="get-in-touch">
      <h2 className="get-in-touch__title">Get in Touch</h2>
      <p className="get-in-touch__description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <button className="get-in-touch__button">Say Hello</button>
      <div className="get-in-touch__socials">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-codepen"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
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

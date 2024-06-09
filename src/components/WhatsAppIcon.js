import React from 'react';
import './WhatsAppIcon.css';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+254742574698"
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp whatsapp_icon"></i>
    </a>
  );
};

export default WhatsAppIcon;

// src/components/FaleComigo.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './FaleComigo.css'; // Importe o arquivo de estilos CSS

const FaleComigo = () => {
  return (
    <div className="social-links-container">
      <h1>Entre em Contato</h1>
      <div className="social-links">
        <a href="https://github.com/seu-usuario-github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
        <a href="https://linkedin.com/seu-linkedin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
        <a href="https://facebook.com/seu-facebook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
        <a href="https://instagram.com/seu-instagram" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
        <a href="https://wa.me/5596984181879" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</a>
      </div>
    </div>
  );
}

export default FaleComigo;

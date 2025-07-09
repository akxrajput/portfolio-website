import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './social.css';

function Social() {
  return (
    <div className="main-links">
      <a href="https://instagram.com/akx.rajput" className="sublink sublink-insta" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com/in/akshay-girase-318136246" className="sublink sublink-linkedin" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/akxrajput" className="sublink sublink-github" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
}

export default Social;

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>Get In Touch</h2>
      <p style={{ color: 'var(--text-secondary)' }}>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      
      <div className="contact-info">
        <a href="mailto:kumarbn37@gmail.com" className="contact-item hover-glow">
          <FaEnvelope color="var(--accent-color)" /> kumarbn37@gmail.com
        </a>
        <div className="contact-item hover-glow">
          <FaPhoneAlt color="var(--accent-color)" /> +91 9701853505
        </div>
      </div>

      <div className="hero-socials" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
        <a href="https://github.com/Naveen10062003" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/naveen-kumar-a05a6027a/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
      </div>
      
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        Designed & Built by Naveen Kumar Basapogula © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

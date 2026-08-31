import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>Get In Touch</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
        I'm currently open for full-time opportunities. Whether you have a question, a project in mind, or just want to connect, feel free to reach out!
      </p>
      
      <div className="contact-info">
        <a href="mailto:kumarbn37@gmail.com" className="contact-item" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
          <FaEnvelope color="var(--accent-color)" /> kumarbn37@gmail.com
        </a>
        <div className="contact-item" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
          <FaPhoneAlt color="var(--accent-color)" /> +91 9701853505
        </div>
      </div>

      <div className="hero-socials" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
        <a href="https://github.com/Naveen10062003" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/naveenbnk10062003/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><FaLinkedin /></a>
      </div>
      
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        Designed & Built by Naveen Kumar Basapogula © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import myImage from '../assets/myimage.jpeg';

const Hero = () => {
  return (
    <section className="section hero" id="about">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">
          Hi, I'm <span>Naveen Kumar</span>
        </h1>
        <h2 className="hero-subtitle">
          Full-Stack Python Developer & Data Analyst
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px' }}>
          Motivated Python Developer and Data Analyst with experience in building microservices applications, 
          REST APIs, and analytics dashboards. Skilled in FastAPI, React, Docker, PostgreSQL, and data analysis.
          Passionate about developing scalable systems and data-driven solutions.
        </p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="/Naveen_Kumar_Resume.pdf" download className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Download CV
          </a>
          <a href="mailto:kumarbn37@gmail.com" className="btn-secondary">Contact Me</a>
        </div>
        
        <div className="hero-socials">
          <a href="https://github.com/Naveen10062003" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/naveen-kumar-a05a6027a/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
          <a href="mailto:kumarbn37@gmail.com" className="social-icon"><FaEnvelope /></a>
        </div>
      </motion.div>
      
      <motion.div 
        className="hero-image-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src={myImage} alt="Naveen Kumar" className="hero-image" />
      </motion.div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaAws, FaRocket, FaDatabase, FaShieldAlt, FaMapMarkerAlt, FaBuilding, FaMoon } from 'react-icons/fa';
import { 
  SiPython, 
  SiFastapi, 
  SiDocker, 
  SiPostgresql, 
  SiApacheairflow, 
  SiApachekafka, 
  SiGit 
} from 'react-icons/si';
import myImage from '../assets/myimage.jpeg';

const techIcons = [
  { name: 'Python', icon: <SiPython size={18} color="#3776AB" />, bg: '#f0f9ff', border: '#bae6fd' },
  { name: 'FastAPI', icon: <SiFastapi size={18} color="#009688" />, bg: '#f0fdfa', border: '#99f6e4' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={18} color="#336791" />, bg: '#eff6ff', border: '#bfdbfe' },
  { name: 'Docker', icon: <SiDocker size={18} color="#2496ED" />, bg: '#f0f9ff', border: '#bae6fd' },
  { name: 'AWS', icon: <FaAws size={18} color="#FF9900" />, bg: '#fffbeb', border: '#fde68a' },
  { name: 'Airflow', icon: <SiApacheairflow size={18} color="#017CEE" />, bg: '#f0f9ff', border: '#bae6fd' },
  { name: 'Kafka', icon: <SiApachekafka size={18} color="#231F20" />, bg: '#f8fafc', border: '#e2e8f0' },
  { name: 'Git', icon: <SiGit size={18} color="#F05032" />, bg: '#fff1f2', border: '#fecdd3' }
];

const stats = [
  { label: 'Experience', value: '2+ Yrs', icon: <FaRocket color="var(--accent-color)" /> },
  { label: 'Data Processed', value: '50K+ Rows', icon: <FaDatabase color="#16a34a" /> },
  { label: 'Microservices', value: '5+ Built', icon: <SiDocker color="#2496ED" /> },
  { label: 'Auth Security', value: '95% Hardened', icon: <FaShieldAlt color="#9333ea" /> }
];

const Hero = () => {
  return (
    <section className="section hero" id="about">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* LIVE STATUS & PREFERENCES */}
        <div className="hero-status-wrapper">
          <div className="status-badge">
            <span className="status-pulse-dot"></span>
            <span>Actively Looking for Opportunities • Full-Time</span>
          </div>
          <div className="hero-preference-tags">
            <span className="pref-tag">
              <FaMapMarkerAlt color="#0284c7" /> Hyderabad • Bengaluru • Pune • Chennai • Remote
            </span>
            <span className="pref-tag">
              <FaBuilding color="#16a34a" /> WFO / Hybrid / Remote
            </span>
            <span className="pref-tag">
              <FaMoon color="#9333ea" /> Day & Night Shift Flexible
            </span>
          </div>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span>Naveen Kumar</span>
        </h1>
        <h2 className="hero-subtitle">
          Full Stack Python Developer | Data Engineer
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.8rem', maxWidth: '600px', fontSize: '1.05rem', lineHeight: '1.7' }}>
          Full Stack Python Developer and Data Engineer with 2 years of experience building backend systems, 
          REST APIs, and ETL pipelines end-to-end — from development to containerization and cloud deployment. 
          Delivered production backend modules with JWT, RBAC, and MFA security across FastAPI, PostgreSQL, Docker, and AWS.
        </p>

        {/* HERO STATS BAR */}
        <div className="hero-stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="hero-stat-card">
              <div className="hero-stat-icon">{s.icon}</div>
              <div>
                <div className="hero-stat-val">{s.value}</div>
                <div className="hero-stat-lbl">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="hero-buttons">
          <button 
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} 
            className="btn-primary"
          >
            View My Work
          </button>
          <a 
            href={`${import.meta.env.BASE_URL}Naveen_Kumar_Resume.pdf`} 
            target="_blank" 
            rel="noopener noreferrer" 
            download="Naveen_Kumar_Resume.pdf" 
            className="btn-secondary" 
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            Download CV
          </a>
          <a href="mailto:kumarbn37@gmail.com" className="btn-secondary">Contact Me</a>
        </div>
        
        <div className="hero-socials">
          <a href="https://github.com/Naveen10062003" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/naveenbnk10062003/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:kumarbn37@gmail.com" className="social-icon" title="Email"><FaEnvelope /></a>
        </div>
      </motion.div>
      
      <motion.div 
        className="hero-image-wrapper"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="hero-avatar-card">
          {/* PROFILE IMAGE WITH GLOWING HALO */}
          <div className="hero-image-container">
            <div className="hero-image-halo"></div>
            <img src={myImage} alt="Naveen Kumar Basapogula" className="hero-image" />
            <div className="hero-avatar-badge">
              <span>🚀</span> 2+ Years Exp
            </div>
          </div>
          
          {/* TECH STACK ECOSYSTEM CONTAINER */}
          <div className="hero-tech-card">
            <div className="hero-tech-card-header">
              <span>⚡</span> Core Tech Ecosystem
            </div>
            <div className="hero-tech-chips">
              {techIcons.map((tech) => (
                <div
                  key={tech.name}
                  className="hero-tech-chip"
                  style={{ background: tech.bg, borderColor: tech.border }}
                >
                  <span className="hero-chip-icon">{tech.icon}</span>
                  <span className="hero-chip-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;



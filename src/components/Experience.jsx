import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTimes, FaExternalLinkAlt, FaCode, FaRocket, FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    role: "Full Stack Python Developer",
    company: "Coderview Technologies (Crewzy HR Management System)",
    department: "Dept: IT-CloudServices | Project: Crewzy HR Management System | Hyderabad, India",
    date: "March 2025 - April 2026",
    desc: [
      "Built a microservices-based HR platform end-to-end for 3+ business units serving 500+ concurrent users.",
      "Built 2+ REST API modules with FastAPI and SQLAlchemy, cutting development cycle time by 30%.",
      "Implemented JWT, RBAC, and MFA security, reducing unauthorized access incidents by 95%.",
      "Optimized PostgreSQL and Redis caching, reducing API response time by 45%.",
      "Containerized 5+ microservices with Docker, managed containers, and streamlined CI/CD automation.",
      "Deployed and managed cloud infrastructure on AWS EC2, RDS, and S3, handling full deployment lifecycle.",
      "Used Cloud AI tools to assist with development, scripting, troubleshooting, and workflow automation."
    ],
    fullDetails: "At Coderview Technologies (Crewzy HR Management System), I led core development of a scalable, enterprise HR ecosystem. This platform handles complex workforce management, employee onboarding, company policy auditing, and compliance reporting. My work involved orchestrating multiple microservices with FastAPI and SQLAlchemy, establishing robust JWT/RBAC/MFA security protocols, optimizing PostgreSQL & Redis caching for fast response times, containerizing services via Docker, and managing cloud deployments on AWS (EC2, RDS, S3).",
    link: "/crewzy-animation",
    linkText: "View Architecture Simulation"
  },
  {
    role: "Data Analyst Intern",
    company: "Coderview Technologies",
    department: "Hyderabad, Telangana, India",
    date: "August 2024 - February 2025",
    desc: [
      "Built an end-to-end ETL pipeline processing 50,000+ records, reducing data processing time by 60%.",
      "Created a Streamlit + Plotly dashboard displaying real-time KPIs, improving reporting efficiency by 35%.",
      "Performed data cleaning and feature engineering with Pandas and SQL, improving accuracy by 28%.",
      "Containerized analytics app with Docker for scalable, portable delivery across environments."
    ],
    fullDetails: "At Coderview Technologies, I developed high-performance analytics pipelines and retail data processing workflows. I engineered ETL jobs over 50,000+ transactional records, computed business-critical KPIs (Total Sales, Average Basket Size, Category Demographics), and built real-time interactive dashboards using Streamlit and Plotly to enable stakeholder decision making.",
    link: "/data-analysis",
    linkText: "Explore Data Dashboard"
  }
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const openExp = (exp) => {
    setSelectedExp(exp);
    document.body.style.overflow = 'hidden';
  };

  const closeExp = () => {
    setSelectedExp(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="section" id="experience">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="timeline-item glass-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            onClick={() => openExp(exp)}
            style={{ cursor: "pointer", position: "relative" }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-date" style={{ color: "var(--accent-color)", fontWeight: "bold" }}>{exp.date}</div>
            <h3 className="timeline-title">{exp.role}</h3>
            <h4 className="timeline-subtitle" style={{ color: "var(--text-secondary)", fontWeight: 500 }}>{exp.company}</h4>

            <ul className="timeline-desc" style={{ marginTop: "15px" }}>
              {exp.desc.slice(0, 3).map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            
            <div style={{ marginTop: "20px", display: "flex", gap: "10px", alignItems: "center", color: "var(--accent-color)", fontSize: "0.9rem", fontWeight: 600 }}>
              <FaRocket /> <span>Tap to view full details</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {selectedExp && (
          <div className="modal-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '20px'
          }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="glass-card" 
              style={{
                width: '100%',
                maxWidth: '800px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                padding: '40px',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* CLOSE BUTTON */}
              <button 
                onClick={closeExp}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: '#f1f5f9',
                  border: '1px solid #cbd5e1',
                  color: '#0f172a',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  transition: 'all 0.2s ease'
                }}
                className="close-hover"
              >
                <FaTimes />
              </button>

              <div style={{ color: "var(--accent-color)", fontWeight: "bold", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                {selectedExp.date}
              </div>
              <h2 style={{ fontSize: "2.2rem", margin: "10px 0", color: "#0f172a" }}>{selectedExp.role}</h2>
              <h3 style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "25px" }}>{selectedExp.company}</h3>
              
              <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "25px" }}>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--text-primary)" }}>
                  {selectedExp.fullDetails}
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--accent-color)", marginBottom: "12px" }}>
                  <FaCode /> <span style={{ fontWeight: "bold", fontSize: "1.05rem" }}>Key Deliverables & Impact</span>
                </div>
                <ul style={{ paddingLeft: "1.2rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  {selectedExp.desc.map((d, i) => <li key={i} style={{ marginBottom: "8px" }}>{d}</li>)}
                </ul>
              </div>

              {selectedExp.link && (
                <div style={{ marginTop: "30px", borderTop: "1px solid #e2e8f0", paddingTop: "25px", textAlign: "center" }}>
                   <Link to={selectedExp.link} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                     <FaExternalLinkAlt /> {selectedExp.linkText}
                   </Link>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Experience;


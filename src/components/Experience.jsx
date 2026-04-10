import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTimes, FaExternalLinkAlt, FaCode, FaChartBar, FaRocket } from 'react-icons/fa';

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "CVT | Crewzy HR Management System",
    date: "March 2025 - Present",
    desc: [
      "Designed and developed a scalable HR Management platform using microservices architecture.",
      "Built backend services using FastAPI and SQLAlchemy with JWT authentication and RBAC.",
      "Implemented Multi-Factor Authentication (MFA/OTP) for enhanced security.",
      "Developed a responsive React (Vite) frontend with Recharts for advanced platform analytics.",
      "Integrated PostgreSQL (persistence), Redis (caching), and Jenkins (CI/CD).",
      "Designed cloud-ready architectures with AWS Boto3 integration."
    ],
    fullDetails: "At CVT, I lead the core development of the Crewzy HR ecosystem. This platform handles complex workforce management, including employee onboarding, company policy auditing, and compliance reporting. My work involves orchestrating multiple microservices, ensuring data isolation for multi-tenant users, and building high-performance data visualization dashboards using Recharts on the frontend and optimized SQL queries on the backend.",
    link: "/crewzy-animation",
    linkText: "View Architecture Simulation"
  },
  {
    role: "Data Analyst Intern",
    company: "Coderview Technologies",
    date: "August 2024 - February 2025",
    desc: [
      "Developed a complete analytics pipeline for retail transactional data analysis.",
      "Built interactive Streamlit dashboards with Plotly for real-time sales insights.",
      "Performed extensive data cleaning and KPI computation (Total Sales, Basket Size).",
      "Containerized analytics modules using Docker for portable deployment."
    ],
    fullDetails: "At Coderview Technologies, I specialized in data-driven decision making. I processed large datasets of customer shopping behavior, applying statistical methods to identify trends. I built a comprehensive dashboard that allowed stakeholders to filter sales by region, category, and time period. The entire system was containerized to ensure it could be deployed across any environment without dependency issues.",
    link: "/data-analysis",
    linkText: "Explore Data Dashboard"
  },
  {
    role: "Python Developer Intern",
    company: "Coderview Technologies",
    date: "May 2024 - July 2024",
    desc: [
      "Focused on core Python backend development and logic implementation.",
      "Collaborated on building robust RESTful components for internal projects.",
      "Optimized data retrieval processes and backend performance."
    ],
    fullDetails: "During this internship at Coderview Technologies, I focused on the fundamentals of scalable backend logic. I was responsible for writing clean, modular Python code and integrating it with various data sources. I learned industry-standard version control and collaborative development practices, contributing to the migration of legacy scripts into modern FastAPI structures.",
    link: null
  }
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const openExp = (exp) => {
    setSelectedExp(exp);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
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
            <h4 className="timeline-subtitle" style={{ color: "var(--text-secondary)" }}>{exp.company}</h4>

            <ul className="timeline-desc" style={{ marginTop: "15px" }}>
              {exp.desc.slice(0, 3).map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            
            <div style={{ marginTop: "20px", display: "flex", gap: "10px", alignItems: "center", color: "var(--accent-color)", fontSize: "0.9rem" }}>
              <FaRocket /> <span>Tap to view details</span>
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
            background: 'rgba(5, 8, 18, 0.95)',
            backdropFilter: 'blur(15px)',
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
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 0 50px rgba(0, 242, 254, 0.2)'
              }}
            >
              {/* CLOSE BUTTON */}
              <button 
                onClick={closeExp}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--accent-color)',
                  color: 'var(--accent-color)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease'
                }}
                className="close-hover"
              >
                <FaTimes />
              </button>

              <div style={{ color: "var(--accent-color)", fontWeight: "bold", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "2px" }}>
                {selectedExp.date}
              </div>
              <h2 style={{ fontSize: "2.5rem", margin: "10px 0", color: "#fff" }}>{selectedExp.role}</h2>
              <h3 style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginBottom: "30px" }}>{selectedExp.company}</h3>
              
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "25px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)", marginBottom: "30px" }}>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-primary)" }}>
                  {selectedExp.fullDetails}
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--accent-color)", marginBottom: "15px" }}>
                    <FaCode /> <span style={{ fontWeight: "bold" }}>Core Contributions</span>
                  </div>
                  <ul style={{ paddingLeft: "1.2rem", color: "var(--text-secondary)" }}>
                    {selectedExp.desc.map((d, i) => <li key={i} style={{ marginBottom: "10px" }}>{d}</li>)}
                  </ul>
                </div>
              </div>

              {selectedExp.link && (
                <div style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "30px", textAlign: "center" }}>
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

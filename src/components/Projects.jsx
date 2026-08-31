import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlayCircle, FaExternalLinkAlt, FaLayerGroup } from 'react-icons/fa';

const projects = [
  {
    title: "Crewzy HR Management System",
    role: "Full Stack Python Developer | FastAPI, PostgreSQL, Docker, Redis",
    link: "/crewzy-animation",
    linkText: "Launch Live HR Simulation",
    badge: "Enterprise Platform",
    desc: [
      "Architected backend microservices managing complex company registration, employee onboarding, and RBAC security.",
      "Integrated JWT authentication with MFA TOTP validation and Redis session caching (<40ms latency).",
      "Containerized multi-service architecture with Docker Compose and automated Jenkins CI/CD deployments to AWS EC2 & RDS."
    ],
    tools: ["FastAPI", "React", "PostgreSQL", "Redis", "Docker", "AWS", "Jenkins", "SQLAlchemy"]
  },
  {
    title: "Customer Shopping Data Analysis",
    role: "Data Analyst / Engineer | Python, Pandas, SQL, Docker",
    link: "/data-analysis",
    linkText: "Launch Analytics Dashboard",
    badge: "ETL & Analytics",
    desc: [
      "Built an automated ETL pipeline analyzing 50,000+ transactional retail records; identified customer trends improving inventory decisions by 25%.",
      "Engineered real-time interactive Streamlit & Plotly charts revealing peak customer traffic and category revenue drivers.",
      "Containerized pipeline with Docker for reproducible deployment across cloud environments."
    ],
    tools: ["Python", "Pandas", "SQL", "Streamlit", "Plotly", "Matplotlib", "Docker"]
  },
  {
    title: "Smart Traffic Enforcement System",
    role: "Backend & Computer Vision Developer | Python, OpenCV, OCR",
    link: "/smart-traffic",
    linkText: "Launch Traffic Simulation",
    badge: "Computer Vision / IoT",
    desc: [
      "Built real-time vehicle speed measurement & number plate detection using OpenCV and OCR with 92% recognition accuracy.",
      "Automated traffic violation detection, reducing manual tollgate and highway enforcement effort by 80%.",
      "Implemented speed calculation triggers and smart barrier control logic for proactive road safety."
    ],
    tools: ["Python", "OpenCV", "OCR", "Computer Vision", "IoT Sensors", "Docker"]
  },
  {
    title: "Hospital Invoice Generator",
    role: "Full-Stack Developer | Python, Flask, SQLite, PDFKit",
    link: "/hospital-invoice",
    linkText: "Launch Billing Generator",
    badge: "Billing Automation",
    desc: [
      "Developed an automated web application for generating itemized hospital invoices with dynamic patient billing records.",
      "Integrated PDFKit document generation for instant downloadable invoices and patient transaction history.",
      "Implemented secure SQLite database storage with automated financial reconciliation."
    ],
    tools: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript", "PDFKit", "Docker"]
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '20px', color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '10px' }}>
          <FaLayerGroup /> Production Systems & Simulations
        </div>
        <h2 className="section-title">Featured Projects</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
          Each project includes a dedicated, interactive live simulation built right into this portfolio.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div 
            key={index}
            className="project-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span className="live-demo-badge">
                  <span className="live-demo-dot"></span> LIVE SIMULATION
                </span>
                <span className="project-category-badge">{proj.badge}</span>
              </div>

              <h3 style={{ fontSize: '1.35rem', marginBottom: '6px', color: '#0f172a' }}>{proj.title}</h3>
              <div className="project-role">{proj.role}</div>
              
              <ul className="project-desc">
                {proj.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <Link to={proj.link} className="explore-btn" style={{ width: '100%', justifyContent: 'center', marginBottom: '16px' }}>
                <FaPlayCircle size={15} /> <span>{proj.linkText}</span> →
              </Link>

              <div className="project-tools">
                {proj.tools.map((tool, i) => (
                  <span key={i} className="skill-tag" style={{ fontSize: '0.75rem', padding: '3px 10px' }}>{tool}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


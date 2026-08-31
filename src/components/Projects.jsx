import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Customer Shopping Data Analysis",
    role: "Data Analyst | Python, Pandas, SQL, Docker",
    desc: [
      "Built an ETL pipeline analyzing 50,000+ retail records; identified sales trends improving inventory decisions by 25%.",
      "Delivered Matplotlib and Seaborn visualizations with actionable insights for marketing and inventory teams.",
      "Containerized pipeline with Docker for reproducible deployment across environments."
    ],
    tools: ["Python", "Pandas", "SQL", "Matplotlib", "Seaborn", "Docker"]
  },
  {
    title: "Smart Traffic Enforcement",
    role: "Backend & Vision Developer | Python, OpenCV, OCR",
    desc: [
      "Built real-time vehicle detection and speed measurement system using OpenCV and OCR, achieving 92% plate recognition accuracy.",
      "Automated traffic violation detection, reducing manual enforcement effort by 80%.",
      "Integrated speed calculation and tollgate control logic for proactive road safety."
    ],
    tools: ["Python", "OpenCV", "OCR", "Computer Vision", "Sensors"]
  },
  {
    title: "Hospital Invoice Generator",
    role: "Full-Stack Developer | Python, Flask, SQLite",
    desc: [
      "Developed a web app for generating hospital invoices with dynamic forms, authentication, and patient billing records.",
      "Integrated PDF generation for downloadable invoices and patient transaction history.",
      "Used SQLite for secure data storage, record management, and retrieval."
    ],
    tools: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript", "PDFKit", "Docker"]
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div 
            key={index}
            className="project-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{proj.title}</h3>
            <div className="project-role">{proj.role}</div>
            <ul className="project-desc">
              {proj.desc.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {proj.title === "Customer Shopping Data Analysis" && (
              <Link to="/data-analysis" className="explore-btn">
                <span>View Data Dashboard</span> →
              </Link>
            )}

            {proj.title === "Smart Traffic Enforcement" && (
              <Link to="/smart-traffic" className="explore-btn">
                <span>Launch AI Simulation</span> →
              </Link>
            )}

            {proj.title === "Hospital Invoice Generator" && (
              <Link to="/hospital-invoice" className="explore-btn">
                <span>View Billing System</span> →
              </Link>
            )}

            <div className="project-tools">
              {proj.tools.map((tool, i) => (
                <span key={i} className="skill-tag">{tool}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

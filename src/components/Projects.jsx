import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Customer Shopping Data Analysis",
    role: "Data Analyst | Individual Project",
    desc: [
      "Performed end-to-end analysis of retail shopping data using Pandas and SQL.",
      "Identified sales trends, peak sales periods, and customer behavior patterns.",
      "Created data visualizations using Matplotlib and Seaborn.",
      "Built a reusable analytics pipeline for business insights.",
      "Containerized the application using Docker for deployment."
    ],
    tools: ["Pandas", "SQL", "Matplotlib", "Seaborn", "Docker"]
  },
  {
    title: "Smart Traffic Enforcement",
    role: "Backend & Vision Developer",
    desc: [
      "Developed an intelligent system to identify vehicles and measure their speed using real-time computer vision and OCR.",
      "Integrated sensor data with image processing to automate traffic enforcement.",
      "Aimed to enhance road safety and support efficient traffic management.",
      "Enabled authorities to detect violations instantly."
    ],
    tools: ["OpenCV", "OCR", "Python", "Sensors"]
  },
  {
    title: "Hospital Invoice Generator",
    role: "Full-Stack Developer",
    desc: [
      "Developed a web app for generating hospital invoices with dynamic forms, authentication, and patient billing records.",
      "Integrated PDF generation for downloadable invoices.",
      "Used SQLite for secure data storage and retrieval."
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

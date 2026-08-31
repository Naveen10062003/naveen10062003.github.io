import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaTools, FaLaptopCode } from 'react-icons/fa';

const Education = () => {
  const educations = [
    {
      institution: "YSR Engineering College, Yogi Vemana University — Kadapa, AP",
      degree: "B.Tech — Computer Science & Engineering",
      score: "7.3 / 10 CGPA",
      date: "June 2020 – April 2024",
      highlights: ["Core Focus: Software Engineering, Data Structures, DBMS, Operating Systems"]
    }
  ];

  const certs = [
    { name: "AWS Developer Associate: Optimizing AWS — Skillsoft", date: "July 2026" },
    { name: "Introduction to AWS: AWS Fundamentals and Navigation — Skillsoft", date: "June 2026" },
    { name: "Data Analytics Essentials — Cisco", date: "March 2025" },
    { name: "Microsoft SQL Server — Coursera", date: "June 2024" },
    { name: "Python Programming — InternPE", date: "November 2023" }
  ];

  return (
    <section className="section" id="education">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education & Certifications
      </motion.h2>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
        gap: "2.5rem",
        marginTop: "40px"
      }}>
        
        {/* FORMAL EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <FaGraduationCap color="var(--accent-color)" size={24} />
            <h3 style={{ margin: 0, color: "var(--text-primary)" }}>Academic Degree</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {educations.map((edu, index) => (
              <div key={index} className="glass-card" style={{ padding: "1.8rem" }}>
                <div style={{ color: 'var(--accent-color)', fontWeight: "bold", fontSize: "1.15rem" }}>{edu.degree}</div>
                <div style={{ fontSize: "0.95rem", marginTop: "6px", color: "var(--text-primary)" }}>{edu.institution}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: "0.85rem", margin: "10px 0" }}>{edu.date}</div>
                <div style={{ fontSize: "1rem" }}>CGPA: <strong style={{ color: "#16a34a" }}>{edu.score}</strong></div>
                <ul style={{ paddingLeft: "1.2rem", marginTop: "12px", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {edu.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            ))}

            {/* PROJECT MILESTONES */}
            <div style={{ marginTop: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
                <FaTools color="var(--accent-color)" size={20} />
                <h4 style={{ margin: 0, color: "var(--text-primary)" }}>Key Project Highlights</h4>
              </div>
              <div className="glass-card" style={{ padding: "1.5rem", background: "#f0f9ff", border: "1px solid #bae6fd" }}>
                <div style={{ fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: 500 }}>• Crewzy Enterprise HR Platform (FastAPI + React + AWS)</div>
                <div style={{ fontSize: "0.95rem", marginTop: "8px", color: "var(--text-primary)", fontWeight: 500 }}>• Retail Customer Shopping Data Analytics Pipeline (Streamlit + Docker)</div>
                <div style={{ fontSize: "0.95rem", marginTop: "8px", color: "var(--text-primary)", fontWeight: 500 }}>• Smart Traffic AI Violation Detection System (OpenCV + OCR)</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CERTIFICATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <FaCertificate color="var(--accent-color)" size={24} />
            <h3 style={{ margin: 0, color: "var(--text-primary)" }}>Professional Certifications</h3>
          </div>
          <div className="timeline">
            {certs.map((cert, index) => (
              <div key={index} className="timeline-item" style={{ paddingLeft: "1.5rem", paddingBottom: "1.5rem" }}>
                <div className="timeline-dot" style={{ width: "12px", height: "12px", left: "-7px" }}></div>
                <div className="timeline-date" style={{ fontSize: "0.85rem" }}>{cert.date}</div>
                <h3 className="timeline-title" style={{ fontSize: "1.05rem", marginTop: "5px" }}>{cert.name}</h3>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;


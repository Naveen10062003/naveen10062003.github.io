import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaTools, FaLaptopCode } from 'react-icons/fa';

const Education = () => {
  const educations = [
    {
      institution: "Yogi Vemana University (YVU)",
      degree: "B.Tech (Computer Science)",
      score: "7.54 CGPA",
      date: "2020 - 2024",
      highlights: ["Specialized in Software Engineering", "Core Subject Expert: DBMS, OS, Data Structures"]
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate (MPC)",
      score: "8.7 CGPA",
      date: "2018 - 2020",
      highlights: ["Focused on Mathematics, Physics, Chemistry"]
    },
    {
      institution: "Vijayavani High School",
      degree: "10th Standard (SSC)",
      score: "9.8 CGPA",
      date: "2018",
      highlights: ["School Topper in Mathematics"]
    }
  ];

  const trainings = [
    {
      name: "Python Full-Stack Coaching",
      institute: "Jspiders Training Institute",
      focus: "Advanced Python, Django, SQL & Web Technologies",
      date: "2024"
    },
    {
      name: "Professional Internship during Academics",
      institute: "Coderview Technologies",
      focus: "Python Backend Development & Core Logic",
      date: "2024"
    }
  ];

  const certs = [
    { name: "Data Analytics Essentials – Cisco", date: "March 2025" },
    { name: "Microsoft SQL Server – Coursera", date: "May 2024 – June 2024" },
    { name: "Python Programming – InternPE", date: "May 2023 – Nov 2023" }
  ];

  return (
    <section className="section" id="education">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Academic Journey & Training
      </motion.h2>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "2rem",
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
            <h3 style={{ margin: 0 }}>Degrees</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {educations.map((edu, index) => (
              <div key={index} className="glass-card" style={{ padding: "1.5rem" }}>
                <div style={{ color: 'var(--accent-color)', fontWeight: "bold", fontSize: "1.1rem" }}>{edu.degree}</div>
                <div style={{ fontSize: "0.9rem", marginTop: "4px" }}>{edu.institution}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: "0.8rem", margin: "8px 0" }}>{edu.date}</div>
                <div style={{ fontSize: "0.95rem" }}>Score: <strong style={{ color: "#22c55e" }}>{edu.score}</strong></div>
                <ul style={{ paddingLeft: "1.2rem", marginTop: "10px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  {edu.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PROFESSIONAL TRAINING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <FaLaptopCode color="var(--accent-color)" size={24} />
            <h3 style={{ margin: 0 }}>Technical Training</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {trainings.map((t, index) => (
              <div key={index} className="glass-card" style={{ padding: "1.5rem", borderLeft: "4px solid var(--accent-color)" }}>
                <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{t.name}</div>
                <div style={{ fontSize: "0.9rem", color: 'var(--accent-color)', marginTop: "4px" }}>{t.institute}</div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "10px" }}>
                  Focus: {t.focus}
                </p>
                <div style={{ color: 'var(--text-secondary)', fontSize: "0.8rem", marginTop: "8px" }}>{t.date}</div>
              </div>
            ))}
            
            {/* ACADEMIC MILESTONES / PROJECTS */}
            <div style={{ marginTop: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
                <FaTools color="var(--accent-color)" size={20} />
                <h4 style={{ margin: 0 }}>Project Milestones</h4>
              </div>
              <div className="glass-card" style={{ padding: "1.2rem", background: "rgba(56, 189, 248, 0.05)" }}>
                <div style={{ fontSize: "0.9rem" }}>• Smart Traffic AI (Computer Vision)</div>
                <div style={{ fontSize: "0.9rem", marginTop: "5px" }}>• Hospital Billing System (Full Stack)</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CERTIFICATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <FaCertificate color="var(--accent-color)" size={24} />
            <h3 style={{ margin: 0 }}>Certifications</h3>
          </div>
          <div className="timeline">
            {certs.map((cert, index) => (
              <div key={index} className="timeline-item" style={{ paddingLeft: "1.5rem", paddingBottom: "1.5rem" }}>
                <div className="timeline-dot" style={{ width: "12px", height: "12px", left: "-7px" }}></div>
                <div className="timeline-date" style={{ fontSize: "0.8rem" }}>{cert.date}</div>
                <h3 className="timeline-title" style={{ fontSize: "1rem", marginTop: "5px" }}>{cert.name}</h3>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;

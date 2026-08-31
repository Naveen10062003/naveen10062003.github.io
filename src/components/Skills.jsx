import React from 'react';
import { motion } from 'framer-motion';

const skillsData = {
  "Languages": ["Python", "SQL"],
  "Frameworks": ["FastAPI", "Flask", "Streamlit"],
  "Libraries & Analytics": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
  "Frontend": ["React (Vite)", "Axios", "HTML/CSS", "JavaScript"],
  "Databases": ["PostgreSQL", "SQLite", "SQLAlchemy"],
  "Cloud (AWS)": ["AWS EC2", "AWS RDS", "AWS S3", "AWS SSO"],
  "DevOps & Tools": ["Docker", "Docker Compose", "Git", "GitHub", "CI/CD"],
  "Cloud AI & Automation": ["Cloud AI Tools", "AI-assisted Development", "Automation Scripting", "Task Automation"],
  "Backend & Security": ["REST APIs", "Microservices Architecture", "Redis", "JWT", "RBAC", "MFA", "OpenCV", "OCR"]
};

const Skills = () => {
  return (
    <section className="section" id="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div 
            key={category}
            className="glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <h3 className="skill-category">{category}</h3>
            <div className="skill-tags">
              {skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


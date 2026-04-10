import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaServer, FaCode, FaShieldAlt, FaReact, FaDatabase, FaCloud, FaKey, FaUserLock, FaClipboardList } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const itemDetails = [
  {
    title: "Microservices Architecture",
    description: "Designed a scalable HR platform utilizing a microservices architecture to manage employee registration, company profiles, and compliance tracking.",
    icon: <FaServer size={24} color="#38bdf8" />
  },
  {
    title: "FastAPI Backend",
    description: "Built robust backend services using FastAPI and SQLAlchemy. Engineered complete REST APIs handling backend logic.",
    icon: <FaCode size={24} color="#22c55e" />
  },
  {
    title: "Fortified Security",
    description: "Implemented highly secure networking layers ensuring absolute safety of API transactions and server endpoints.",
    icon: <FaShieldAlt size={24} color="#f59e0b" />
  },
  {
    title: "Responsive Frontend",
    description: "Developed a stunning frontend via React styled with Tailwind CSS. Integrated dynamic Recharts for data visualization.",
    icon: <FaReact size={24} color="#e879f9" />
  },
  {
    title: "Persistent Storage",
    description: "Integrated optimized PostgreSQL endpoints for massive data storage and executed Redis caching layers to vastly improve session management.",
    icon: <FaDatabase size={24} color="#ef4444" />
  },
  {
    title: "Cloud & DevOps",
    description: "Containerized the platform using Docker & Docker Compose. Automated testing workflows through Jenkins CI/CD.",
    icon: <FaCloud size={24} color="#0ea5e9" />
  },
  {
    title: "MFA Authentication",
    description: "Executed a strict Multi-Factor Authentication (OTP) pipeline locking down user access and preventing unauthorized intrusions.",
    icon: <FaKey size={24} color="#a855f7" />
  },
  {
    title: "Role-Based Access (RBAC)",
    description: "Configured JWT tokenized Role-Based Access Control, strictly delegating permissions across Admin, HR, and Employee tiers.",
    icon: <FaUserLock size={24} color="#4ade80" />
  },
  {
    title: "Automated Audit Logging",
    description: "Established continuous audit workflow logs capturing every state change within the HR system to meet legal standards.",
    icon: <FaClipboardList size={24} color="#fbbf24" />
  }
];

const auditData = [
  { time: '08:00', logs: 120 },
  { time: '10:00', logs: 350 },
  { time: '12:00', logs: 600 },
  { time: '14:00', logs: 420 },
  { time: '16:00', logs: 890 },
  { time: '18:00', logs: 200 }
];

const complianceData = [
  { name: 'Fully Compliant', value: 85, color: '#22c55e' },
  { name: 'Pending Review', value: 10, color: '#f59e0b' },
  { name: 'Policy Violation', value: 5, color: '#ef4444' }
];

const CrewzyAnimation = () => {
  return (
    <div style={{ background: "#0a0f1c", color: "white", minHeight: "100vh", padding: "20px 5%" }}>
      
      {/* HEADER SECTION */}
      <div style={{ padding: "30px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: "30px" }}>
        <Link to="/" style={{ color: "var(--accent-color)", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", width: "fit-content", marginBottom: "20px" }}>
          <FaArrowLeft /> Back to Home
        </Link>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "center" }}>
          <img 
            src="/crewzy_hr_hero.png" 
            alt="Crewzy System Architecture" 
            style={{ width: "100%", maxWidth: "350px", borderRadius: "12px", boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }} 
          />
          <div style={{ flex: 1, minWidth: "300px" }}>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ fontSize: "2.5rem", color: "#a855f7", marginBottom: "15px" }}
            >
              Crewzy HR Management System
            </motion.h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px" }}>
              A comprehensive, securely scalable HR Management platform built to manage complex company profiles, employee registrations, and continuous compliance tracking inside an isolated Dockerized environment.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["FastAPI", "React", "PostgreSQL", "Redis", "Docker", "AWS Boto3", "Jenkins", "SQLAlchemy", "TailwindCSS"].map(tech => (
                <span key={tech} className="skill-tag" style={{ margin: 0, padding: "4px 12px", background: "rgba(168, 85, 247, 0.1)", borderColor: "#a855f7" }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CAPABILITIES GRID SECTION */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "25px", paddingBottom: "50px" }}>
        {itemDetails.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card"
            style={{ display: "flex", flexDirection: "column", gap: "15px", padding: "25px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {item.icon}
              <h3 style={{ fontSize: "1.2rem", margin: 0 }}>{item.title}</h3>
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.5", fontSize: "0.95rem" }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* REPORTING GRAPHS SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "40px", paddingBottom: "50px" }}
      >
        <h2 style={{ fontSize: "2rem", color: "#a855f7", marginBottom: "30px", textAlign: "center" }}>Platform Analytics</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "30px" }}>
          
          {/* AUDIT REPORT GRAPH */}
          <div className="glass-card" style={{ padding: "25px", height: "350px" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "20px", color: "#38bdf8" }}>Daily System Audit Activity</h3>
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={auditData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ background: "#1a2235", border: "none" }} />
                <Line type="monotone" dataKey="logs" name="Audit Events" stroke="#38bdf8" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* COMPLIANCE GRAPH */}
          <div className="glass-card" style={{ padding: "25px", height: "350px" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "20px", color: "#22c55e", textAlign: "center" }}>Company Compliance Status</h3>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie data={complianceData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={90} label paddingAngle={5}>
                  {complianceData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "#1a2235", border: "none" }} formatter={(value) => `${value}%`} />
                <Legend iconType="square" wrapperStyle={{ paddingTop: "20px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </motion.div>

    </div>
  );
};

export default CrewzyAnimation;

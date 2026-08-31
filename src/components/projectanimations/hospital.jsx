import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaFilePdf, FaDatabase, FaLock, FaUserMd, FaFileInvoiceDollar } from "react-icons/fa";

const HospitalAnimation = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: "#ffffff", color: "var(--text-primary)", minHeight: "100vh", padding: "105px 5% 60px 5%", overflowX: "hidden" }}>
      
      {/* HEADER */}
      <div style={{ padding: "10px 0 30px 0", borderBottom: "1px solid #e2e8f0", marginBottom: "30px" }}>
        <Link 
          to="/" 
          style={{ 
            color: "var(--accent-color)", 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "8px", 
            textDecoration: "none", 
            width: "fit-content", 
            marginBottom: "25px",
            background: "#f0f9ff",
            border: "1px solid #bae6fd",
            padding: "8px 18px",
            borderRadius: "20px",
            fontWeight: 600,
            fontSize: "0.95rem",
            boxShadow: "0 2px 8px rgba(2, 132, 199, 0.08)"
          }}
        >
          <FaArrowLeft /> Back to Home
        </Link>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "center" }}>
          <img 
            src="/hospital_hero.png" 
            alt="Hospital System" 
            style={{ width: "100%", maxWidth: "350px", borderRadius: "12px", boxShadow: "0 8px 25px rgba(14, 165, 233, 0.15)", border: "1px solid #e2e8f0" }} 
          />
          <div style={{ flex: 1, minWidth: "300px" }}>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ fontSize: "2.5rem", color: "var(--accent-color)", marginBottom: "15px" }}
            >
              Hospital Invoice Generator
            </motion.h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "20px" }}>
              A full-stack medical billing solution designed to streamline patient invoicing. 
              The application features dynamic form handling, secure authentication, and a robust PDF generation engine. 
              Built with a focus on data integrity, it utilizes an optimized SQLite backend to ensure persistent and fast access to patient billing records.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["Python", "Flask", "SQLite", "JavaScript", "HTML/CSS", "PDFKit", "Docker"].map(tech => (
                <span key={tech} className="skill-tag" style={{ margin: 0, padding: "6px 14px" }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATION AREA */}
      <div className="glass-card" style={{ 
        marginTop: "40px", 
        padding: "40px", 
        minHeight: "450px", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        background: "#f8fafc",
        border: "1px solid #e2e8f0"
      }}>
        
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div 
              key="step0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              style={{ textAlign: "center" }}
            >
              <FaUserMd size={80} color="#0ea5e9" style={{ marginBottom: "20px" }} />
              <h2 style={{ color: "#0f172a" }}>Step 1: Dynamic Patient Intake</h2>
              <div style={{ marginTop: "20px", background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", width: "300px", textAlign: "left", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                <p style={{ color: "#334155", marginBottom: "6px" }}><strong>Name:</strong> <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>John Doe</motion.span></p>
                <p style={{ color: "#334155", marginBottom: "6px" }}><strong>Service:</strong> <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>General Checkup</motion.span></p>
                <p style={{ color: "#334155" }}><strong>Date:</strong> <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>2025-04-10</motion.span></p>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{ textAlign: "center" }}
            >
              <FaDatabase size={80} color="#16a34a" style={{ marginBottom: "20px" }} />
              <h2 style={{ color: "#0f172a" }}>Step 2: Secure SQLite Storage</h2>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ marginTop: "20px" }}
              >
                <FaLock size={40} color="#16a34a" />
              </motion.div>
              <p style={{ color: "#16a34a", marginTop: "10px", fontWeight: 600 }}>Encrypting and Saving Record...</p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              style={{ textAlign: "center" }}
            >
              <FaFilePdf size={100} color="#dc2626" style={{ marginBottom: "20px" }} />
              <h2 style={{ color: "#0f172a" }}>Step 3: PDF Invoice Engine</h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5 }}
                style={{ height: "10px", background: "#dc2626", borderRadius: "5px", width: "300px", marginTop: "20px" }}
              />
              <p style={{ marginTop: "10px", color: "var(--text-secondary)" }}>Generating PDFkit Document...</p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: "center" }}
            >
              <FaFileInvoiceDollar size={100} color="#d97706" style={{ marginBottom: "20px" }} />
              <h2 style={{ color: "#d97706" }}>Invoice Successfully Ready!</h2>
              <p style={{ marginTop: "10px", color: "#334155", fontSize: "1.1rem", fontWeight: 600 }}>Total Amount: $450.00</p>
              <button className="btn-primary" style={{ marginTop: "20px" }}>Download Invoice</button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PROGRESS DOTS */}
        <div style={{ display: "flex", gap: "10px", position: "absolute", bottom: "30px" }}>
          {[0, 1, 2, 3].map(i => (
            <div key={i} style={{ 
              width: "12px", 
              height: "12px", 
              borderRadius: "50%", 
              background: step === i ? "var(--accent-color)" : "#cbd5e1",
              transition: "all 0.3s ease"
            }} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default HospitalAnimation;

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
    <div style={{ background: "#0a0f1c", color: "white", minHeight: "100vh", padding: "20px 5%", overflowX: "hidden" }}>
      
      {/* HEADER */}
      <div style={{ padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: "30px" }}>
        <Link to="/" style={{ color: "var(--accent-color)", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", width: "fit-content", marginBottom: "20px" }}>
          <FaArrowLeft /> Back to Home
        </Link>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "center" }}>
          <img 
            src="/hospital_hero.png" 
            alt="Hospital System" 
            style={{ width: "100%", maxWidth: "350px", borderRadius: "12px", boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)" }} 
          />
          <div style={{ flex: 1, minWidth: "300px" }}>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ fontSize: "2.5rem", color: "#0ea5e9", marginBottom: "15px" }}
            >
              Hospital Invoice Generator
            </motion.h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px" }}>
              A full-stack medical billing solution designed to streamline patient invoicing. 
              The application features dynamic form handling, secure authentication, and a robust PDF generation engine. 
              Built with a focus on data integrity, it utilizes an optimized SQLite backend to ensure persistent and fast access to patient billing records.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["Python", "Flask", "SQLite", "JavaScript", "HTML/CSS", "PDFKit", "Docker"].map(tech => (
                <span key={tech} className="skill-tag" style={{ margin: 0, padding: "4px 12px", background: "rgba(14, 165, 233, 0.1)", borderColor: "#0ea5e9" }}>{tech}</span>
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
        background: "rgba(255,255,255,0.02)"
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
              <h2>Step 1: Dynamic Patient Intake</h2>
              <div style={{ marginTop: "20px", background: "rgba(255,255,255,0.05)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", width: "300px", textAlign: "left" }}>
                <p>Name: <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>John Doe</motion.span></p>
                <p>Service: <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>General Checkup</motion.span></p>
                <p>Date: <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>2025-04-10</motion.span></p>
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
              <FaDatabase size={80} color="#22c55e" style={{ marginBottom: "20px" }} />
              <h2>Step 2: Secure SQLite Storage</h2>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ marginTop: "20px" }}
              >
                <FaLock size={40} color="#22c55e" />
              </motion.div>
              <p style={{ color: "#22c55e", marginTop: "10px" }}>Encrypting and Saving Record...</p>
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
              <FaFilePdf size={100} color="#ef4444" style={{ marginBottom: "20px" }} />
              <h2>Step 3: PDF Invoice Engine</h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5 }}
                style={{ height: "10px", background: "#ef4444", borderRadius: "5px", width: "300px", marginTop: "20px" }}
              />
              <p style={{ marginTop: "10px" }}>Generating PDFkit Document...</p>
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
              <FaFileInvoiceDollar size={100} color="#eab308" style={{ marginBottom: "20px" }} />
              <h2 style={{ color: "#eab308" }}>Invoice Successfully Ready!</h2>
              <p style={{ marginTop: "10px" }}>Total Amount: $450.00</p>
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
              background: step === i ? "#0ea5e9" : "rgba(255,255,255,0.2)",
              transition: "all 0.3s ease"
            }} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default HospitalAnimation;

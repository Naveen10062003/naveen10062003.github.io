import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const SmartTraffic = () => {
  const [replayKey, setReplayKey] = React.useState(0);

  const handleReplay = () => {
    setReplayKey(prev => prev + 1);
  };

  return (
    <div style={{ background: "#0a0f1c", color: "white", minHeight: "100vh", padding: "20px 5%", overflowX: "hidden" }}>
      
      {/* HEADER */}
      <div style={{ padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: "30px" }}>
        <Link to="/" style={{ color: "var(--accent-color)", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", width: "fit-content", marginBottom: "20px" }}>
          <FaArrowLeft /> Back to Home
        </Link>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "center" }}>
          <img 
            src="/smart_traffic_hero.png" 
            alt="Smart Traffic Control" 
            style={{ width: "100%", maxWidth: "350px", borderRadius: "12px", boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)" }} 
          />
          <div style={{ flex: 1, minWidth: "300px" }}>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ fontSize: "2.5rem", color: "var(--accent-color)", marginBottom: "15px" }}
            >
              Smart Traffic Enforcement System
            </motion.h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px" }}>
              An intelligent traffic management solution designed to automate speed limit enforcement and road safety. 
              The system utilizes computer vision and OCR to identify vehicles, calculate real-time speed in dedicated radar zones, 
              and automatically control tollgate barriers to halt violators while allowing law-abiding drivers to proceed seamlessly.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["OpenCV", "OCR", "Python", "Sensors", "React", "Framer Motion", "IoT Integration"].map(tech => (
                <span key={tech} className="skill-tag" style={{ margin: 0, padding: "4px 12px", background: "rgba(56, 189, 248, 0.1)", borderColor: "var(--accent-color)" }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ROAD AREA SIMULATION */}
      <div key={replayKey} style={{
        position: "relative",
        width: "100%",
        height: "550px",
        background: "#020617",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid rgba(56, 189, 248, 0.2)",
        marginTop: "40px",
        marginBottom: "100px",
        boxShadow: "0 0 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(56, 189, 248, 0.1)"
      }}>
        {/* DASHBOARD OVERLAY */}
        <div style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          right: 0, 
          padding: "15px 25px", 
          background: "rgba(15, 23, 42, 0.9)", 
          borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 50
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 8px #ef4444" }}></div>
              <span style={{ fontSize: "0.8rem", fontWeight: "bold", letterSpacing: "1px", color: "#9ca3af" }}>LIVE FEED: TOLLGATE_CAM_04</span>
            </div>
            <button 
              onClick={handleReplay}
              className="skill-tag"
              style={{ 
                margin: 0, 
                fontSize: "0.7rem", 
                padding: "2px 10px", 
                cursor: "pointer", 
                background: "rgba(56, 189, 248, 0.1)",
                color: "#38bdf8",
                borderColor: "#38bdf8"
              }}
            >
              REPLAY SIMULATION
            </button>
          </div>
          <span style={{ fontSize: "0.8rem", color: "#38bdf8" }}>{new Date().toLocaleTimeString()}</span>
        </div>

        <div style={{
          position: "absolute",
          width: "100%",
          height: "200px",
          top: "40%",
          background: "#1e293b",
          borderTop: "5px solid #333",
          borderBottom: "5px solid #333"
        }}>

        {/* MID LANE DASHED LINE */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          style={{
            position: "absolute",
            top: "50%",
            width: "200%",
            height: "6px",
            background: "repeating-linear-gradient(90deg, white 0 40px, transparent 40px 80px)"
          }}
        />

        {/* SPEED SENSOR ZONE (YELLOW LINES) */}
        <div style={{ position: "absolute", left: "25%", top: 0, height: "100%", width: "8px", background: "rgba(234, 179, 8, 0.7)", boxShadow: "0 0 10px #eab308" }} />
        <div style={{ position: "absolute", left: "35%", top: 0, height: "100%", width: "8px", background: "rgba(234, 179, 8, 0.7)", boxShadow: "0 0 10px #eab308" }} />
        
        <div style={{ position: "absolute", left: "26%", top: "-35px", color: "#eab308", fontWeight: "bold", letterSpacing: "2px", fontSize: "0.7rem", opacity: 0.8 }}>
          &gt;&gt; RADAR_ANALYSIS_ZONE &lt;&lt;
        </div>

        {/* TOLLGATE STRUCTURE */}
        <div style={{ position: "absolute", left: "65%", top: "-10px", height: "320px", width: "40px", background: "linear-gradient(to right, #334155, #1e293b)", border: "1px solid rgba(255,255,255,0.1)", zIndex: 10 }}>
          <div style={{ background: "#ef4444", color: "white", textAlign: "center", padding: "5px 0", fontSize: "0.6rem", fontWeight: "bold" }}>STOP</div>
          <div style={{ position: "absolute", bottom: "10px", width: "100%", textAlign: "center", color: "#38bdf8", fontSize: "0.6rem" }}>TX-01</div>
        </div>

        {/* BARRIER TOP LANE (For Car A) */}
        <motion.div 
          initial={{ rotate: 0 }}
          animate={{ rotate: -90 }}
          transition={{ delay: 3, duration: 1, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "67%",
            top: "20%",
            width: "150px",
            height: "10px",
            background: "repeating-linear-gradient(45deg, #ef4444 0 10px, #fff 10px 20px)",
            transformOrigin: "left center",
            zIndex: 11,
            borderRadius: "5px"
          }}
        />

        {/* BARRIER BOTTOM LANE (For Car B) */}
        <motion.div 
          initial={{ rotate: 0 }}
          style={{
            position: "absolute",
            left: "67%",
            top: "70%",
            width: "150px",
            height: "10px",
            background: "repeating-linear-gradient(45deg, #ef4444 0 10px, #fff 10px 20px)",
            transformOrigin: "left center",
            zIndex: 11,
            borderRadius: "5px"
          }}
        />

        {/* CAR A (Top Lane - Safe Driver 60km/h) */}
        <motion.div
          initial={{ left: "-20%" }}
          animate={{ left: "110%" }}
          transition={{ duration: 9, ease: "linear" }}
          style={{
            position: "absolute",
            top: "15%",
            width: "80px",
            height: "40px",
            background: "linear-gradient(90deg, #22c55e, #16a34a)",
            borderRadius: "6px",
            boxShadow: "0 5px 15px rgba(34, 197, 94, 0.3)",
            zIndex: 5
          }}
        >
          <div style={{ position: "absolute", top: "5px", right: "5px", width: "10px", height: "5px", background: "white", opacity: 0.6, borderRadius: "2px" }}></div>
        </motion.div>

        {/* CAR B (Bottom Lane - Speeder 105km/h) */}
        <motion.div
          initial={{ left: "-20%" }}
          animate={{ left: "57%" }}
          transition={{ delay: 6, duration: 1.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "65%",
            width: "80px",
            height: "40px",
            background: "linear-gradient(90deg, #ef4444, #dc2626)",
            borderRadius: "6px",
            boxShadow: "0 5px 15px rgba(239, 68, 68, 0.3)",
            zIndex: 5
          }}
        >
          <div style={{ position: "absolute", top: "5px", right: "5px", width: "10px", height: "5px", background: "white", opacity: 0.6, borderRadius: "2px" }}></div>
        </motion.div>

        {/* SCANNING LINES / GRID EFFECT */}
        <div style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))",
          backgroundSize: "100% 4px, 3px 100%",
          pointerEvents: "none",
          zIndex: 60
        }}></div>

        {/* HUD MESSAGES - THE "CARDS" */}

        {/* Car A Message Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.9], y: [0, -10, -10, -20] }}
          transition={{ delay: 1.5, duration: 4, times: [0, 0.1, 0.9, 1] }}
          className="glass-card"
          style={{
            position: "absolute",
            left: "22%",
            top: "60px",
            background: "rgba(10, 15, 28, 0.95)",
            border: "1px solid #22c55e",
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.2)",
            padding: "12px 20px",
            zIndex: 100,
            minWidth: "220px"
          }}
        >
          <div style={{ color: "#22c55e", fontSize: "0.6rem", fontWeight: "bold", marginBottom: "5px", textTransform: "uppercase" }}>Analysis Complete</div>
          <div style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "bold" }}>VEHICLE ID: VH-4042</div>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", margin: "8px 0" }}></div>
          <div style={{ color: "#9ca3af", fontSize: "0.8rem" }}>Speed: <span style={{ color: "#22c55e", fontWeight: "bold" }}>60 km/h</span></div>
          <div style={{ color: "#22c55e", fontSize: "0.7rem", marginTop: "5px" }}>STATUS: VALID PASS</div>
        </motion.div>

        {/* Car B Message Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 6.8, duration: 0.4 }}
          className="glass-card"
          style={{
            position: "absolute",
            left: "22%",
            bottom: "60px",
            background: "rgba(10, 15, 28, 0.95)",
            border: "1px solid #ef4444",
            boxShadow: "0 0 25px rgba(239, 68, 68, 0.3)",
            padding: "12px 20px",
            zIndex: 100,
            minWidth: "220px"
          }}
        >
          <div style={{ color: "#ef4444", fontSize: "0.6rem", fontWeight: "bold", marginBottom: "5px", textTransform: "uppercase" }}>Violation Detected!</div>
          <div style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "bold" }}>VEHICLE ID: VH-9910</div>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", margin: "8px 0" }}></div>
          <div style={{ color: "#9ca3af", fontSize: "0.8rem" }}>Speed: <span style={{ color: "#ef4444", fontWeight: "bold" }}>105 km/h</span></div>
          <div style={{ color: "#ef4444", fontSize: "0.7rem", marginTop: "5px" }}>STATUS: CITATION ISSUED</div>
        </motion.div>

        {/* SIREN / FLASH ON CAR B STOPPING */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0, 0.8, 0, 0.8, 0] }}
          transition={{ delay: 7.5, duration: 3 }}
          style={{
            position: "absolute",
            left: "57%",
            top: "65%",
            width: "80px",
            height: "40px",
            borderRadius: "8px",
            boxShadow: "0 0 30px 15px rgba(239, 68, 68, 0.5)",
            pointerEvents: "none",
            zIndex: 6
          }}
        />

      </div>

    </div>


    </div>
  );
};

export default SmartTraffic;

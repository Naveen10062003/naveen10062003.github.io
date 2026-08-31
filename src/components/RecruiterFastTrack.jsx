import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBolt, 
  FaClock, 
  FaBriefcase, 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaMoon, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaFilePdf, 
  FaLinkedin, 
  FaCheck,
  FaWhatsapp
} from 'react-icons/fa';

const RecruiterFastTrack = () => {
  const [toast, setToast] = useState('');

  const triggerToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2500);
  };

  const copyText = (text, label) => {
    navigator.clipboard.writeText(text);
    triggerToast(`${label} copied to clipboard! ✓`);
  };

  return (
    <section className="section" id="fast-track" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '20px', color: '#1d4ed8', fontWeight: 600, fontSize: '0.85rem', marginBottom: '10px' }}>
          <FaBolt /> For HRs & Hiring Managers
        </div>
        <h2 className="section-title">Recruiter 10-Second Fast Track</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
          All crucial hiring metrics condensed for busy technical recruiters and engineering leaders.
        </p>
      </div>

      <div className="fast-track-card">
        {/* TOP STATUS HEADER */}
        <div className="fast-track-header">
          <div className="fast-track-status">
            <span className="status-pulse-dot"></span>
            <div>
              <div style={{ fontWeight: 700, color: '#15803d', fontSize: '1rem' }}>Available for Immediate Joining</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Notice Period: 0 Days • Open to Full-Time Roles</div>
            </div>
          </div>

          <div className="fast-track-actions">
            <a 
              href={`${import.meta.env.BASE_URL}Naveen_Kumar_Resume.pdf`} 
              target="_blank" 
              rel="noopener noreferrer" 
              download="Naveen_Kumar_Resume.pdf" 
              className="fast-btn fast-btn-primary"
            >
              <FaFilePdf size={14} /> Download CV
            </a>
            <button 
              onClick={() => copyText('kumarbn37@gmail.com', 'Email')}
              className="fast-btn fast-btn-secondary"
            >
              <FaEnvelope size={14} /> Copy Email
            </button>
            <a 
              href="https://wa.me/919390503505" 
              target="_blank" 
              rel="noopener noreferrer"
              className="fast-btn fast-btn-secondary"
            >
              <FaWhatsapp size={14} color="#16a34a" /> WhatsApp
            </a>
          </div>
        </div>

        {/* METRICS GRID */}
        <div className="fast-track-grid">
          <div className="fast-grid-item">
            <div className="fast-item-icon" style={{ background: '#eff6ff', color: '#0284c7' }}><FaBriefcase /></div>
            <div>
              <div className="fast-item-lbl">Total Experience</div>
              <div className="fast-item-val">2.0 Years (Python, Backend, ETL)</div>
            </div>
          </div>

          <div className="fast-grid-item">
            <div className="fast-item-icon" style={{ background: '#f0fdf4', color: '#16a34a' }}><FaClock /></div>
            <div>
              <div className="fast-item-lbl">Notice Period</div>
              <div className="fast-item-val">Immediate Joiner (0 Days)</div>
            </div>
          </div>

          <div className="fast-grid-item">
            <div className="fast-item-icon" style={{ background: '#f5f3ff', color: '#7c3aed' }}><FaMapMarkerAlt /></div>
            <div>
              <div className="fast-item-lbl">Preferred Locations</div>
              <div className="fast-item-val">Hyderabad • Bengaluru • Pune • Chennai • Remote</div>
            </div>
          </div>

          <div className="fast-grid-item">
            <div className="fast-item-icon" style={{ background: '#fffbeb', color: '#d97706' }}><FaMoon /></div>
            <div>
              <div className="fast-item-lbl">Work Model & Shifts</div>
              <div className="fast-item-val">WFO / Hybrid / Remote • Day & Night Shifts</div>
            </div>
          </div>

          <div className="fast-grid-item">
            <div className="fast-item-icon" style={{ background: '#ecfeff', color: '#0891b2' }}><FaGraduationCap /></div>
            <div>
              <div className="fast-item-lbl">Highest Qualification</div>
              <div className="fast-item-val">B.Tech Computer Science (7.3 CGPA)</div>
            </div>
          </div>

          <div className="fast-grid-item">
            <div className="fast-item-icon" style={{ background: '#fff1f2', color: '#e11d48' }}><FaPhoneAlt /></div>
            <div>
              <div className="fast-item-lbl">Direct Contact</div>
              <div className="fast-item-val">+91 9390503505 • kumarbn37@gmail.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* TOAST FEEDBACK */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="dock-toast"
          >
            <FaCheck color="#16a34a" /> {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RecruiterFastTrack;

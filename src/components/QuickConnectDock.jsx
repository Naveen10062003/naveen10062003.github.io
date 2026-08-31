import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck, FaPhoneAlt, FaFilePdf } from 'react-icons/fa';

const QuickConnectDock = () => {
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard! ✓`);
  };

  return (
    <>
      {/* FLOATING QUICK DOCK */}
      <div className="quick-dock">
        <button 
          onClick={() => copyToClipboard('kumarbn37@gmail.com', 'Email (kumarbn37@gmail.com)')}
          className="dock-item"
          title="Copy Email"
        >
          <FaEnvelope color="#0284c7" size={16} />
          <span className="dock-label">Email</span>
        </button>

        <a 
          href="https://www.linkedin.com/in/naveenbnk10062003/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="dock-item"
          title="LinkedIn Profile"
        >
          <FaLinkedin color="#0a66c2" size={16} />
          <span className="dock-label">LinkedIn</span>
        </a>

        <a 
          href="https://github.com/Naveen10062003" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="dock-item"
          title="GitHub Profile"
        >
          <FaGithub color="#0f172a" size={16} />
          <span className="dock-label">GitHub</span>
        </a>

        <button 
          onClick={() => copyToClipboard('+919390503505', 'Phone (+91 9390503505)')}
          className="dock-item"
          title="Copy Phone Number"
        >
          <FaPhoneAlt color="#16a34a" size={14} />
          <span className="dock-label">Call/WA</span>
        </button>

        <a 
          href={`${import.meta.env.BASE_URL}Naveen_Kumar_Resume.pdf`}
          target="_blank" 
          rel="noopener noreferrer" 
          download="Naveen_Kumar_Resume.pdf"
          className="dock-item dock-item-highlight"
          title="Download Resume"
        >
          <FaFilePdf size={14} />
          <span className="dock-label">CV</span>
        </a>
      </div>

      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="dock-toast"
          >
            <FaCheck color="#16a34a" /> {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuickConnectDock;

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </main>

      <Footer />
      
      {/* Floating Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: '#ffffff',
          border: '1.5px solid #bae6fd',
          color: 'var(--accent-color)',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 9999,
          boxShadow: '0 4px 15px rgba(2, 132, 199, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          transition: 'all 0.3s ease'
        }}
        title="Back to Top"
      >
        ↑
      </button>
    </div>
  );
};

export default Home;

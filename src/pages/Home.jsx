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
      <Navbar />
      
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
          background: 'rgba(56, 189, 248, 0.2)',
          border: '1px solid var(--accent-color)',
          color: 'var(--accent-color)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 9999,
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem'
        }}
        title="Back to Top"
      >
        ↑
      </button>
    </div>
  );
};

export default Home;

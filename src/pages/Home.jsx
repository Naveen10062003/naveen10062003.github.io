import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RecruiterFastTrack from '../components/RecruiterFastTrack';
import BentoGrid from '../components/BentoGrid';
import ApiPlayground from '../components/ApiPlayground';
import Projects from '../components/Projects';
import GitHubStats from '../components/GitHubStats';
import InteractiveTerminal from '../components/InteractiveTerminal';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Footer from '../components/Footer';
import QuickConnectDock from '../components/QuickConnectDock';

const Home = () => {
  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      <main>
        <Hero />
        <RecruiterFastTrack />
        <BentoGrid />
        <ApiPlayground />
        <Projects />
        <GitHubStats />
        <InteractiveTerminal />
        <Skills />
        <Experience />
        <Education />
      </main>

      <Footer />
      <QuickConnectDock />
      
      {/* Floating Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top-btn"
        title="Back to Top"
      >
        ↑
      </button>
    </div>
  );
};

export default Home;

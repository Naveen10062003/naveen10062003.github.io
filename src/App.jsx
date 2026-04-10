import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectAnimation from './components/projectanimations/dataanalysis';
import CrewzyAnimation from './components/projectanimations/crewzy';
import SmartTraffic from './components/projectanimations/smarttraffic';
import HospitalAnimation from './components/projectanimations/hospital';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-analysis" element={<ProjectAnimation />} />
        <Route path="/crewzy-animation" element={<CrewzyAnimation />} />
        <Route path="/smart-traffic" element={<SmartTraffic />} />
        <Route path="/hospital-invoice" element={<HospitalAnimation />} />
      </Routes>
    </Router>
  );
}

export default App;

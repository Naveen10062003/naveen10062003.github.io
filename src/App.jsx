import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SmartTraffic from './components/projectanimations/smarttraffic';
import HospitalAnimation from './components/projectanimations/hospital';
import CrewzyAnimation from './components/projectanimations/crewzy';
import DataAnalysis from './components/projectanimations/dataanalysis';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smart-traffic" element={<SmartTraffic />} />
          <Route path="/hospital-invoice" element={<HospitalAnimation />} />
          <Route path="/crewzy-animation" element={<CrewzyAnimation />} />
          <Route path="/data-analysis" element={<DataAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

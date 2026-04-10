import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, background: 'rgba(10, 15, 28, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '1rem 5%' }}>
      <Link to="/" className="nav-brand" style={{ textDecoration: 'none', color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '1.5rem' }}>
        NaveenKumar
      </Link>
      <div className="nav-links">
        <a href="/#about" style={{ color: 'white', textDecoration: 'none', marginLeft: '2rem' }}>About</a>
        <a href="/#education" style={{ color: 'white', textDecoration: 'none', marginLeft: '2rem' }}>Education</a>
        <a href="/#experience" style={{ color: 'white', textDecoration: 'none', marginLeft: '2rem' }}>Experience</a>
        <a href="/#projects" style={{ color: 'white', textDecoration: 'none', marginLeft: '2rem' }}>Projects</a>
        <a href="/#skills" style={{ color: 'white', textDecoration: 'none', marginLeft: '2rem' }}>Skills</a>
      </div>
    </nav>
  );
};

export default Navbar;

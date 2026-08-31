import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaFilePdf, FaBars, FaTimes } from 'react-icons/fa';
import resumePdf from '../assets/Naveen_Kumar_Resume.pdf';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* BRAND LOGO WITH MONOGRAM */}
        <Link 
          to="/" 
          className="nav-brand" 
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <div className="nav-logo-badge">NK</div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">Naveen Kumar</span>
            <span className="nav-brand-title">Full Stack | Data Eng</span>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
          <button onClick={() => scrollToSection('about')} className="nav-link-btn">
            About
          </button>
          <button onClick={() => scrollToSection('experience')} className="nav-link-btn">
            Experience
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link-btn">
            Projects
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link-btn">
            Skills
          </button>
          <button onClick={() => scrollToSection('education')} className="nav-link-btn">
            Education
          </button>
          <a 
            href={resumePdf} 
            target="_blank" 
            rel="noopener noreferrer" 
            download="Naveen_Kumar_Resume.pdf" 
            className="nav-cta-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaFilePdf size={14} /> Resume
          </a>
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;



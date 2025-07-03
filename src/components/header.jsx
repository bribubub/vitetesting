import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="site-logo" onClick={handleLinkClick}>
          Rafi Nurfadhil Putra
          <span className="site-logo-tagline"></span>
        </Link>

        <nav className="desktop-nav">
          <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className="nav-link" onClick={handleLinkClick}>About Me</Link>
          <Link to="/skills" className="nav-link" onClick={handleLinkClick}>Skills</Link>
          <Link to="/portfolio" className="nav-link" onClick={handleLinkClick}>Portfolio</Link>
          <Link to="/contact" className="btn-contact-now" onClick={handleLinkClick}>Contact Now</Link>
        </nav>

        <button id="mobile-menu-button" className="mobile-menu-button" onClick={toggleMobileMenu}>
          <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu-panel ${isMobileMenuOpen ? 'open' : 'closed'}`}>
        <Link to="/" className="mobile-menu-item" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" className="mobile-menu-item" onClick={handleLinkClick}>About Me</Link>
        <Link to="/skills" className="mobile-menu-item" onClick={handleLinkClick}>Skills</Link>
        <Link to="/portfolio" className="mobile-menu-item" onClick={handleLinkClick}>Portfolio</Link>
        <Link to="/contact" className="mobile-menu-item" onClick={handleLinkClick}>Contact</Link>
      </div>
    </header>
  );
}

export default Header;
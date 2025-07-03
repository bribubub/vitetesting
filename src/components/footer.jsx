import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section-brand">
          <h3 className="footer-brand-name">Rafi Nurfadhil Putra</h3>
          <p className="footer-about-text">
            Passionate about crafting dynamic web experiences and bringing innovative ideas to life. Dedicated to clean code, user-centric design, and continuous learning.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-nav-list">
            <li><Link to="/" className="footer-link"><i className="fas fa-chevron-right icon-sm icon-mr"></i> Home</Link></li>
            <li><Link to="/about" className="footer-link"><i className="fas fa-chevron-right icon-sm icon-mr"></i> About Me</Link></li>
            <li><Link to="/skills" className="footer-link"><i className="fas fa-chevron-right icon-sm icon-mr"></i> Skills</Link></li>
            <li><Link to="/portfolio" className="footer-link"><i className="fas fa-chevron-right icon-sm icon-mr"></i> Portfolio</Link></li>
            <li><Link to="/contact" className="footer-link"><i className="fas fa-chevron-right icon-sm icon-mr"></i> Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Get In Touch</h4>
          <p className="footer-contact-text">Have an exciting project in mind or just want to chat? Reach out!</p>
          <ul className="footer-contact-list">
            <li>
              <i className="fas fa-envelope icon-primary icon-mr"></i>
              <a href="mailto:rnurfadil5@gmail.com" className="footer-link">rnurfadil5@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-phone-alt icon-primary icon-mr"></i>
              <a href="tel:+628989103032" className="footer-link">08989103032</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt icon-primary icon-mr"></i>
              <span className="footer-text">Depok, West Java, Indonesia</span>
            </li>
          </ul>

          <div className="footer-social-links">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <i className="fab fa-linkedin icon-lg"></i>
            </a>
            <a href="https://github.com/bribubub" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <i className="fab fa-github icon-lg"></i>
            </a>
            <a href="https://x.com/ImpactKonin" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <i className="fab fa-twitter icon-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-text">
        <p>&copy; {currentYear} Rafi Nurfadhil Putra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
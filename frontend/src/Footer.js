import React from 'react';
import './Footer.css'; // Import the CSS for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="/" className="footer-logo-link">RETAIN-X</a>
        </div>
        <div className="footer-nav">
          <ul className="footer-nav-list">
            <li><a href="/about-us" className="footer-nav-link">About</a></li>
            <li><a href="/contact" className="footer-nav-link">Contact</a></li>
            <li><a href="/contact" className="footer-nav-link">Privacy Policy</a></li>
            <li><a href="/contact" className="footer-nav-link">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <p className="footer-text">© 2025 ByteForce. All Rights Reserved.</p>
          <p className="footer-text">Crafted with passion by Team ByteForce.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

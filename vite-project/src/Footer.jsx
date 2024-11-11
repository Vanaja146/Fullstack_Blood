// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1>Blood</h1>
          <p>
At Lifeblood, we are committed to saving lives through the power of blood donation. 
With compassion and care, we ensure every donation helps those in need. 
Join us in making a lasting impact—your gift of blood could be the difference someone is waiting for.  
Donate today and be a hero!
          </p>
          <div className="footer-icons">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
       
        <div className="footer-company">
          <h2>Company</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">AboutUs</a></li>
            <li><a href="#donor">Donor</a></li>
            <li><a href="#recipents">Recipents</a></li>
            
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Get In Touch</h2>
          <p>+91 7845323245</p>
          <p>contact@vignanblood.com</p>
        </div>
      </div>
      <div className="footer-message">
        <p>"Gift of Life: Donate Blood, Save Lives"</p>
        </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 @ Blood.com - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

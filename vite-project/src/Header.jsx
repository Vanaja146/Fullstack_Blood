
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './wt.png';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Blood Bank Logo" className="logo" />
          </Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/donor">Donor</Link></li>
          <li><Link to="/recipients">Recipients</Link></li>
          <li><Link to="/blood-availability">Blood Availability</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import Donor from './Donor';
import Recipients from './Recipients';
import BloodAvailability from './BloodAvailability';
import ContactUs from './ContactUs';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/recipients" element={<Recipients />} />
          <Route path="/blood-availability" element={<BloodAvailability />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

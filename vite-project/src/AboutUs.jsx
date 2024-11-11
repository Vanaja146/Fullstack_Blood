// AboutUs.js
import React from 'react';
import './AboutUs.css';

const teamMembers = [
  {
    name: 'Jahnavi Durga',
    bio: 'Jahnavi oversees the daily operations of the blood bank, ensuring efficient communication between donors and recipients.',
    contact: 'jahnavidurga@example.com'
  },
  {
    name: 'Padmaja',
    bio: 'Padmaja is passionate about community service and works closely with donors to organize blood donation drives.',
    contact: 'padmaja@example.com'
  },
  {
    name: 'Gopi',
    bio: 'Gopi ensures the safety and well-being of donors during the blood donation process.',
    contact: 'gopi@example.com'
  },
  {
    name: 'Vanajakshi',
    bio: 'Vanajakshi advises on all medical aspects related to blood donation and ensures compliance with healthcare regulations.',
    contact: 'vanajakshi@example.com'
  },
  {
    name: 'Sujitha',
    bio: 'Sujitha works on outreach programs, ensuring donors are aware of the importance of regular blood donations.',
    contact: 'Sujitha@example.com'
  }
];

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Blood Donation</h2>
      <p>The Blood Bank website is designed to facilitate the donation and receipt of blood through an easy-to-navigate front-end built with React JS. 
        The site contains six core pages, each serving a different purpose, from promoting awareness to managing donor and recipient data. 
        The goal is to create a user-friendly platform for blood donation centers to display information, allow donors to register, recipients to search for blood availability, and provide a channel of communication with the center.</p>
      
      <h3>Our Team</h3>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <h4>{member.name}</h4>
            <p><strong>Bio:</strong> {member.bio}</p>
            <p><strong>Contact:</strong> <a href={`mailto:${member.contact}`}>{member.contact}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

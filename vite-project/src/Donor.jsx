import React, { useState } from 'react';
import './Donor.css';
import axios from "axios";
import toast from "react-hot-toast";

const Donor = () => {
  const [donors, setDonors] = useState([]);
  const [form, setForm] = useState({
    name: '',
    age: '',
    contact: '',
    bloodGroup: '',
    email: '',
    gender: '',
    address: '',
    lastDonationDate: ''
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAddDonor = async () => {
    try {
      const response = await axios.post("https://fullstack-backend-occy.onrender.com/api/donors", form, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
      });
      toast.success(response.data.message);
      setDonors([...donors, form]); // Add the donor to the local list
      setForm({
        name: '',
        age: '',
        contact: '',
        bloodGroup: '',
        email: '',
        gender: '',
        address: '',
        lastDonationDate: ''
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="donor">
      <h2>Donor Form</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
      <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} />
      <input name="bloodGroup" placeholder="Blood Group" value={form.bloodGroup} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} />
      <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
      <input type="date" name="lastDonationDate" placeholder="Last Donation Date" value={form.lastDonationDate} onChange={handleChange} />
      <button onClick={handleAddDonor}>Add Donor</button>

      <h3>Donor List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Blood Group</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Last Donation Date</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor, index) => (
            <tr key={index}>
              <td>{donor.name}</td>
              <td>{donor.age}</td>
              <td>{donor.contact}</td>
              <td>{donor.bloodGroup}</td>
              <td>{donor.email}</td>
              <td>{donor.gender}</td>
              <td>{donor.address}</td>
              <td>{donor.lastDonationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Instructions for Blood Donation</h3>
      <ul className="donation-instructions">
        <li>Make sure you are in good health before donating blood.</li>
        <li>Eat a healthy meal and stay hydrated before your donation appointment.</li>
        <li>Avoid alcohol and caffeine for at least 24 hours prior to donating.</li>
        <li>Bring a valid ID with you when donating blood.</li>
        <li>After donating, drink plenty of fluids and rest for at least 10-15 minutes.</li>
        <li>Avoid heavy physical activities or lifting for a few hours after donating.</li>
      </ul>

      <h4>Eligibility Requirements:</h4>
      <ul className="eligibility-requirements">
        <li>You must be at least 18 years old (16 or 17 with parental consent in some regions).</li>
        <li>You must weigh at least 110 pounds (50 kg).</li>
        <li>You should not have donated blood in the past 8 weeks.</li>
        <li>If you have traveled outside the country recently, check travel restrictions.</li>
        <li>Some health conditions may restrict you from donating blood (e.g., low hemoglobin, recent surgery).</li>
      </ul>
    </div>
  );
};

export default Donor;

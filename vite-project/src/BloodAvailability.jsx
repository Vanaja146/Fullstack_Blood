import React, { useState } from 'react';
import './BloodAvailability.css';
import axios from "axios";
//import toast from "react-hot-toast";

const BloodAvailability = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search) {
      toast.error("Please enter a blood group to search.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5010/api/donors/search`, {
        params: { bloodGroup: search },
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      
      setResults(response.data.donors);
      toast.success("Donors retrieved successfully.");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred while fetching donors.");
      setResults([]);
    }
  };

  return (
    <div className="blood-availability">
      <h2>Check Blood Availability</h2>
      <form onSubmit={handleSearch}>
        <input
          placeholder="Enter Blood Group"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h3>Available Donors</h3>
      {results.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood Group</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {results.map((donor, index) => (
              <tr key={index}>
                <td>{donor.name}</td>
                <td>{donor.bloodGroup}</td>
                <td>{donor.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No donors found for the specified blood group.</p>
      )}
    </div>
  );
};

export default BloodAvailability;

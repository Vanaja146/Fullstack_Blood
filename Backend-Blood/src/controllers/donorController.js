const Donor = require('../models/Donor');

// Function to add a new donor
const addDonor = async (req, res) => {
    const { name, age, contact, bloodGroup, email, gender, address, lastDonationDate } = req.body;

    // Create a new donor instance
    const donor = new Donor({
        name,
        age,
        contact,
        bloodGroup,
        email,
        gender,
        address,
        lastDonationDate
    });

    try {
        const savedDonor = await donor.save(); // Save the donor to the database
        res.status(201).json(savedDonor); // Respond with the created donor
    } catch (error) {
        res.status(400).json({ message: error.message }); // Handle errors
    }
};

// Function to get all donors
const getDonors = async (req, res) => {
    try {
        const donors = await Donor.find(); // Retrieve all donors from the database
        res.status(200).json(donors); // Respond with the list of donors
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
};

module.exports = {
    addDonor,
    getDonors
};

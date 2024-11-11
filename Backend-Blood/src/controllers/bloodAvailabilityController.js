const Donor = require('../models/Donor'); // Make sure you have a Donor model

// Function to get available donors by blood group
const getAvailableDonors = async (req, res) => {
    const { bloodGroup } = req.query; // Get the blood group from query parameters

    try {
        const donors = await Donor.find({ bloodGroup: bloodGroup }); // Filter donors by blood group
        res.status(200).json(donors); // Respond with the list of available donors
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
};

module.exports = {
    getAvailableDonors
};

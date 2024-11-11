const Recipient = require('../models/Recipient'); // Make sure you have a Recipient model

// Function to add a new recipient
const addRecipient = async (req, res) => {
    const { name, bloodGroup, hospitalName, contact } = req.body;

    // Create a new recipient instance
    const recipient = new Recipient({
        name,
        bloodGroup, 
        hospitalName,
        contact
    });

    try {
        const savedRecipient = await recipient.save(); // Save the recipient to the database
        res.status(201).json(savedRecipient); // Respond with the created recipient
    } catch (error) {
        res.status(400).json({ message: error.message }); // Handle errors
    }
};

// Function to get all recipients
const getRecipients = async (req, res) => {
    try {
        const recipients = await Recipient.find(); // Retrieve all recipients from the database
        res.status(200).json(recipients); // Respond with the list of recipients
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
};

module.exports = {
    addRecipient,
    getRecipients
};

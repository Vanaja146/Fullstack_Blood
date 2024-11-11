const mongoose = require('mongoose');

// Define the recipient schema
const recipientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    hospitalName: { type: String, required: true },
    contact: { type: String, required: true }
}, { timestamps: true });

// Create the recipient model
const Recipient = mongoose.model('Recipient', recipientSchema);

module.exports = Recipient;

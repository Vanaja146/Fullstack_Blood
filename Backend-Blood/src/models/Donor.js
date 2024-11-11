const mongoose = require('mongoose');

// Define the donor schema
const donorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    contact: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    lastDonationDate: { type: Date, required: true }
}, { timestamps: true });

// Create the donor model
const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;

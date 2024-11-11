const mongoose = require('mongoose');

// Define the blood availability schema
const bloodAvailabilitySchema = new mongoose.Schema({
    bloodGroup: { type: String, required: true },
    donors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Donor' }], // Reference to the Donor model
}, { timestamps: true });

// Create the blood availability model
const BloodAvailability = mongoose.model('BloodAvailability', bloodAvailabilitySchema);
module.exports = BloodAvailability;

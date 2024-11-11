const express = require('express');
const router = express.Router();
const { getAvailableDonors } = require('../controllers/bloodAvailabilityController');

// Define route for getting available donors by blood group
router.get('/', getAvailableDonors); // Route to get available donors

module.exports = router;

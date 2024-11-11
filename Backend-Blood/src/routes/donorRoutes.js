const express = require('express');
const router = express.Router();
const { addDonor, getDonors } = require('../controllers/donorController');

// Define routes
router.post('/', addDonor);  // Route to add a donor
router.get('/', getDonors);   // Route to get all donors

module.exports = router;

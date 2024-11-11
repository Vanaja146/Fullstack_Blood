const express = require('express');
const router = express.Router();
const { addRecipient, getRecipients } = require('../controllers/recipientController');

// Define routes
router.post('/', addRecipient);  // Route to add a recipient
router.get('/', getRecipients);   // Route to get all recipients

module.exports = router;

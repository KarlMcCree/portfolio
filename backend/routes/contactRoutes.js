const express = require('express');
const router = express.Router();
const { createContact, getContacts } = require('../controllers/contactController');

// Public routes
router.post('/', createContact);

// Protected routes (add authentication middleware later)
router.get('/', getContacts);

module.exports = router;

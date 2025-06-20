const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// GET /contact - הצגת דף צור קשר
router.get('/', contactController.getContact);

// POST /contact - שליחת טופס יצירת קשר
router.post('/', contactController.postContact);

module.exports = router; 
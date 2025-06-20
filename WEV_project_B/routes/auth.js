const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { isAuthenticated, isNotAuthenticated } = require('../middleware/auth');

// Routes
router.get('/login', isNotAuthenticated, authController.getLogin);
router.post('/login', isNotAuthenticated, authController.postLogin);
router.get('/signup', isNotAuthenticated, authController.getSignup);
router.post('/signup', isNotAuthenticated, authController.postSignup);
router.get('/logout', isAuthenticated, authController.logout);

module.exports = router; 
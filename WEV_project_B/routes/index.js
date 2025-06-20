const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth');

// Home page
router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'דף הבית'
    });
});

// About page
router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'אודות'
    });
});

// Contact page
router.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'צור קשר'
    });
});

// Meal planner page (protected)
router.get('/planner', isAuthenticated, (req, res) => {
    res.render('pages/planner', {
        title: 'תכנון ארוחות'
    });
});

module.exports = router; 
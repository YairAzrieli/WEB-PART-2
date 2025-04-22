/**
 * FitMeal - Main JavaScript File
 * ==============================
 * This file contains the main JavaScript functionality for the FitMeal application
 * Created as part of the Web Development Course Project
 */

// Wait for DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    console.log('FitMeal application initialized');
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize animations
    initAnimations();
    
    // Initialize page-specific functionality
    initPageFunctionality();
});

/**
 * Initialize mobile navigation functionality
 */
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Toggle aria-expanded for accessibility
            const expanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', expanded);
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

/**
 * Initialize animations for page elements
 */
function initAnimations() {
    // Add fade-in animation to elements with 'animate' class
    const animatedElements = document.querySelectorAll('.animate');
    
    if (animatedElements.length > 0) {
        animatedElements.forEach((element, index) => {
            // Add stagger effect
            setTimeout(() => {
                element.classList.add('fade-in');
            }, index * 100);
        });
    }
    
    // Add animation to feature icons
    const featureIcons = document.querySelectorAll('.feature-icon');
    if (featureIcons.length > 0) {
        featureIcons.forEach(icon => {
            icon.classList.add('slide-in-top');
        });
    }
}

/**
 * Initialize page-specific functionality based on current page
 */
function initPageFunctionality() {
    // Get current page path
    const path = window.location.pathname;
    
    // Home page functionality
    if (path === '/' || path.includes('index.html')) {
        initHomePage();
    }
    // Login page functionality
    else if (path.includes('login.html')) {
        initLoginPage();
    }
    // Signup page functionality
    else if (path.includes('signup.html')) {
        initSignupPage();
    }
    // Meal planner page functionality
    else if (path.includes('planner.html')) {
        initPlannerPage();
    }
    // Contact page functionality
    else if (path.includes('contact.html')) {
        initContactPage();
    }
}

/**
 * Home page specific functionality
 */
function initHomePage() {
    console.log('Home page initialized');
    
    // Example: Add event listener to "Get Started" button
    const getStartedBtn = document.querySelector('.get-started-btn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = './pages/signup.html';
        });
    }
    
    // Example: Initialize feature animations
    const features = document.querySelectorAll('.feature-container');
    if (features.length > 0) {
        features.forEach((feature, index) => {
            feature.classList.add('stagger-item');
            feature.classList.add('slide-in-right');
        });
    }
}

/**
 * Login page specific functionality
 */
function initLoginPage() {
    console.log('Login page initialized');
    
    // Get login form element
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        // Add submit event listener
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form inputs
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Validate form (basic validation for now)
            if (email && password) {
                // Simulate login success
                showMessage('התחברת בהצלחה!', 'success');
                
                // In a real application, you would send the login data to the server
                // For this demo, redirect to planner after a delay
                setTimeout(() => {
                    window.location.href = './planner.html';
                }, 1500);
            } else {
                showMessage('נא למלא את כל השדות', 'error');
            }
        });
    }
}

/**
 * Signup page specific functionality
 */
function initSignupPage() {
    console.log('Signup page initialized');
    
    // Similar to login page, but with more fields
    // Implementation depends on the signup form structure
}

/**
 * Meal planner page specific functionality
 */
function initPlannerPage() {
    console.log('Planner page initialized');
    
    // This will be implemented later when the planner form is created
}

/**
 * Contact page specific functionality
 */
function initContactPage() {
    console.log('Contact page initialized');
    
    // Get contact form element
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        // Add submit event listener
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form inputs
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (name && email && message) {
                // Simulate sending message
                showMessage('ההודעה נשלחה בהצלחה!', 'success');
                
                // Clear form
                contactForm.reset();
            } else {
                showMessage('נא למלא את כל השדות', 'error');
            }
        });
    }
}

/**
 * Display a message to the user
 * @param {string} text - The message text
 * @param {string} type - The message type ('success' or 'error')
 */
function showMessage(text, type = 'success') {
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `message ${type}-message`;
    messageEl.textContent = text;
    
    // Get the message container or create one if it doesn't exist
    let messageContainer = document.querySelector('.message-container');
    if (!messageContainer) {
        messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';
        document.body.appendChild(messageContainer);
    }
    
    // Add message to container
    messageContainer.appendChild(messageEl);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        messageEl.remove();
        
        // Remove container if it's empty
        if (messageContainer.children.length === 0) {
            messageContainer.remove();
        }
    }, 3000);
}

// Additional utility functions can be added below this line

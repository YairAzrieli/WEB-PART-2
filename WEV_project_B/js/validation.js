/**
 * FitMeal - Form Validation JavaScript
 * ====================================
 * This file contains validation functions for forms in the FitMeal application
 * Created as part of the Web Development Course Project
 */

/**
 * Validate email format
 * @param {string} email - The email address to validate
 * @returns {object} - Result with isValid flag and error message if invalid
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    return {
        isValid,
        message: isValid ? '' : 'כתובת האימייל אינה תקינה'
    };
}

/**
 * Validate Israeli phone number (must start with 0 and have 10 digits)
 * @param {string} phone - The phone number to validate
 * @returns {object} - Result with isValid flag and error message if invalid
 */
function validatePhone(phone) {
    // Remove any non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    // Check if starts with 0 and has exactly 10 digits
    const isValid = /^0\d{9}$/.test(cleanPhone);
    
    return {
        isValid,
        message: isValid ? '' : 'מספר טלפון חייב להתחיל בספרה 0 ולהכיל בדיוק 10 ספרות'
    };
}

/**
 * Validate password strength
 * @param {string} password - The password to validate
 * @returns {object} - Result with isValid flag and error message if invalid
 */
function validatePassword(password) {
    // Password must be at least 8 characters and contain at least one number and one letter
    const isValid = password.length >= 8 && /[0-9]/.test(password) && /[a-zA-Z]/.test(password);
    
    return {
        isValid,
        message: isValid ? '' : 'הסיסמה חייבת להכיל לפחות 8 תווים, מספר אחד ואות אחת'
    };
}

/**
 * Validate name (must contain only letters and be at least 2 characters)
 * @param {string} name - The name to validate
 * @returns {object} - Result with isValid flag and error message if invalid
 */
function validateName(name) {
    // Allow letters, spaces, and hyphens in names (for compound names)
    const nameRegex = /^[\u0590-\u05FFa-zA-Z\s'-]{2,}$/;
    const isValid = nameRegex.test(name);
    
    return {
        isValid,
        message: isValid ? '' : 'השם חייב להכיל לפחות 2 תווים ולהכיל אותיות בלבד'
    };
}

/**
 * Validate numeric input (for age, weight, height, etc.)
 * @param {string} value - The value to validate
 * @param {number} min - Minimum allowed value
 * @param {number} max - Maximum allowed value
 * @returns {object} - Result with isValid flag and error message if invalid
 */
function validateNumeric(value, min, max) {
    const num = parseFloat(value);
    const isValid = !isNaN(num) && num >= min && num <= max;
    
    return {
        isValid,
        message: isValid ? '' : `הערך חייב להיות מספר בין ${min} ל-${max}`
    };
}

/**
 * Validate required field (not empty)
 * @param {string} value - The value to validate
 * @param {string} fieldName - Name of the field for the error message
 * @returns {object} - Result with isValid flag and error message if invalid
 */
function validateRequired(value, fieldName) {
    const isValid = value.trim() !== '';
    
    return {
        isValid,
        message: isValid ? '' : `${fieldName} הוא שדה חובה`
    };
}

/**
 * Display validation error for a field
 * @param {HTMLElement} inputElement - The input element
 * @param {string} errorMessage - The error message to display
 */
function showValidationError(inputElement, errorMessage) {
    // Get the existing error element or create a new one
    let errorElement = inputElement.parentElement.querySelector('.error-message');
    
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        inputElement.parentElement.appendChild(errorElement);
    }
    
    // Set the error message
    errorElement.textContent = errorMessage;
    
    // Add error styling to the input
    inputElement.classList.add('input-error');
}

/**
 * Clear validation error for a field
 * @param {HTMLElement} inputElement - The input element
 */
function clearValidationError(inputElement) {
    // Find the error element
    const errorElement = inputElement.parentElement.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.textContent = '';
    }
    
    // Remove error styling from the input
    inputElement.classList.remove('input-error');
}

/**
 * Validate a form input and show/clear error
 * @param {HTMLElement} inputElement - The input element
 * @param {function} validationFn - Validation function to use
 * @param {...any} args - Arguments to pass to the validation function
 * @returns {boolean} - Whether the input is valid
 */
function validateInput(inputElement, validationFn, ...args) {
    const result = validationFn(inputElement.value, ...args);
    
    if (!result.isValid) {
        showValidationError(inputElement, result.message);
    } else {
        clearValidationError(inputElement);
    }
    
    return result.isValid;
}

/**
 * Validate the login form
 * @param {HTMLFormElement} form - The login form element
 * @returns {boolean} - Whether the form is valid
 */
function validateLoginForm(form) {
    const emailInput = form.querySelector('#email');
    const passwordInput = form.querySelector('#password');
    
    const isEmailValid = validateInput(emailInput, validateEmail);
    const isPasswordValid = validateInput(passwordInput, validateRequired, 'סיסמה');
    
    return isEmailValid && isPasswordValid;
}

/**
 * Validate the signup form
 * @param {HTMLFormElement} form - The signup form element
 * @returns {boolean} - Whether the form is valid
 */
function validateSignupForm(form) {
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const passwordInput = form.querySelector('#password');
    const passwordConfirmInput = form.querySelector('#password-confirm');
    
    const isNameValid = validateInput(nameInput, validateName);
    const isEmailValid = validateInput(emailInput, validateEmail);
    const isPasswordValid = validateInput(passwordInput, validatePassword);
    
    // Validate password confirmation
    let isPasswordConfirmValid = true;
    if (passwordConfirmInput) {
        isPasswordConfirmValid = passwordConfirmInput.value === passwordInput.value;
        
        if (!isPasswordConfirmValid) {
            showValidationError(passwordConfirmInput, 'הסיסמאות אינן תואמות');
        } else {
            clearValidationError(passwordConfirmInput);
        }
    }
    
    return isNameValid && isEmailValid && isPasswordValid && isPasswordConfirmValid;
}

/**
 * Validate the contact form
 * @param {HTMLFormElement} form - The contact form element
 * @returns {boolean} - Whether the form is valid
 */
function validateContactForm(form) {
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');
    
    const isNameValid = validateInput(nameInput, validateName);
    const isEmailValid = validateInput(emailInput, validateEmail);
    const isMessageValid = validateInput(messageInput, validateRequired, 'הודעה');
    
    return isNameValid && isEmailValid && isMessageValid;
}

/**
 * Validate the planner form
 * @param {HTMLFormElement} form - The planner form element
 * @returns {boolean} - Whether the form is valid
 */
function validatePlannerForm(form) {
    const ageInput = form.querySelector('#age');
    const weightInput = form.querySelector('#weight');
    const heightInput = form.querySelector('#height');
    
    // Validate numeric fields with appropriate ranges
    const isAgeValid = validateInput(ageInput, validateNumeric, 12, 120);
    const isWeightValid = validateInput(weightInput, validateNumeric, 30, 300);
    const isHeightValid = validateInput(heightInput, validateNumeric, 100, 250);
    
    // Validate other required fields
    // (Add more validations as needed for your specific form)
    
    return isAgeValid && isWeightValid && isHeightValid;
}

// Add event listeners for real-time validation
document.addEventListener('DOMContentLoaded', function() {
    // Get all forms
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Add submit event listener to validate before submission
        form.addEventListener('submit', function(e) {
            // Determine which validation function to use based on form id
            let isValid = true;
            
            if (form.id === 'login-form') {
                isValid = validateLoginForm(form);
            } else if (form.id === 'signup-form') {
                isValid = validateSignupForm(form);
            } else if (form.id === 'contact-form') {
                isValid = validateContactForm(form);
            } else if (form.id === 'planner-form') {
                isValid = validatePlannerForm(form);
            }
            
            // Prevent submission if not valid
            if (!isValid) {
                e.preventDefault();
            }
        });
        
        // Add input event listeners for real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                // Validate based on input type
                if (input.id === 'email') {
                    validateInput(input, validateEmail);
                } else if (input.id === 'phone') {
                    validateInput(input, validatePhone);
                } else if (input.id === 'password') {
                    validateInput(input, validatePassword);
                } else if (input.id === 'name') {
                    validateInput(input, validateName);
                } else if (input.id === 'age') {
                    validateInput(input, validateNumeric, 12, 120);
                } else if (input.id === 'weight') {
                    validateInput(input, validateNumeric, 30, 300);
                } else if (input.id === 'height') {
                    validateInput(input, validateNumeric, 100, 250);
                } else if (input.required) {
                    validateInput(input, validateRequired, input.name || 'שדה זה');
                }
            });
        });
    });
});

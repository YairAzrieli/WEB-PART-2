const { body, validationResult } = require('express-validator');

exports.validateContact = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('שם הוא שדה חובה')
        .isLength({ min: 2, max: 100 })
        .withMessage('שם חייב להכיל בין 2 ל-100 תווים'),
    
    body('email')
        .trim()
        .notEmpty()
        .withMessage('אימייל הוא שדה חובה')
        .isEmail()
        .withMessage('אנא הזן כתובת אימייל תקינה'),
    
    body('subject')
        .trim()
        .notEmpty()
        .withMessage('נושא הוא שדה חובה')
        .isLength({ min: 2, max: 200 })
        .withMessage('נושא חייב להכיל בין 2 ל-200 תווים'),
    
    body('message')
        .trim()
        .notEmpty()
        .withMessage('הודעה היא שדה חובה')
        .isLength({ min: 10 })
        .withMessage('הודעה חייבת להכיל לפחות 10 תווים'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render('pages/contact', {
                title: 'צור קשר',
                error: errors.array()[0].msg,
                formData: req.body
            });
        }
        next();
    }
]; 
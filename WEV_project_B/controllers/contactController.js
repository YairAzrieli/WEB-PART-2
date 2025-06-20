const Contact = require('../models/Contact');

exports.getContact = (req, res) => {
    res.render('pages/contact', {
        title: 'צור קשר',
        error: req.query.error,
        success: req.query.success
    });
};

exports.postContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // שמירת ההודעה במסד הנתונים
        await Contact.create({ name, email, subject, message });

        // כאן יהיה הקוד לשליחת המייל
        // כרגע רק מדמה את השליחה

        res.redirect('/contact?success=ההודעה נשלחה בהצלחה');
    } catch (error) {
        console.error('Contact error:', error);
        res.redirect('/contact?error=שגיאה בשליחת ההודעה');
    }
}; 
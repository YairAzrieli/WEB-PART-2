const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.getLogin = (req, res) => {
    res.render('pages/login', {
        title: 'התחברות',
        error: req.query.error
    });
};

exports.postLogin = async (req, res) => {
    try {
        const { email, password, remember } = req.body;
        const user = await User.findByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.redirect('/login?error=פרטי התחברות שגויים');
        }

        req.session.userId = user.id;
        if (remember) {
            req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // 30 days
        }

        res.redirect('/');
    } catch (error) {
        console.error('Login error:', error);
        res.redirect('/login?error=שגיאה בהתחברות');
    }
};

exports.getSignup = (req, res) => {
    res.render('pages/signup', {
        title: 'הרשמה',
        error: req.query.error
    });
};

exports.postSignup = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.redirect('/signup?error=הסיסמאות אינן תואמות');
        }

        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.redirect('/signup?error=כתובת האימייל כבר קיימת במערכת');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        req.session.userId = user.id;
        res.redirect('/');
    } catch (error) {
        console.error('Signup error:', error);
        res.redirect('/signup?error=שגיאה בהרשמה');
    }
};

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Logout error:', err);
        }
        res.redirect('/');
    });
}; 
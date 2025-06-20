const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const userToLocals = require('./middleware/user');
const db = require('./config/db.config');

const app = express();

// Database connection check
db.getConnection()
    .then(connection => {
        console.log('Database connection established successfully');
        connection.release();
    })
    .catch(err => {
        console.error('Error connecting to the database:', err);
        process.exit(1); // Exit if cannot connect to database
    });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static files configuration
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// User middleware
app.use(userToLocals);

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const authRoutes = require('./routes/auth');
const mainRoutes = require('./routes/index');
const contactRoutes = require('./routes/contact');
app.use('/auth', authRoutes);
app.use('/', mainRoutes);
app.use('/contact', contactRoutes);

app.get('/', (req, res) => {
    res.render('pages/index', { 
        title: 'דף הבית',
        user: req.session.user || null
    });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('pages/error', {
        title: 'שגיאה',
        message: 'משהו השתבש...'
    });
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 
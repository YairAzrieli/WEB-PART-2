const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        next();
    } else {
        res.redirect('/login');
    }
};

const isNotAuthenticated = (req, res, next) => {
    if (!req.session.userId) {
        next();
    } else {
        res.redirect('/');
    }
};

module.exports = {
    isAuthenticated,
    isNotAuthenticated
}; 
const User = require('../models/User');

const userToLocals = async (req, res, next) => {
    if (req.session.userId) {
        try {
            const user = await User.findById(req.session.userId);
            if (user) {
                res.locals.user = {
                    id: user.id,
                    username: user.username,
                    email: user.email
                };
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }
    next();
};

module.exports = userToLocals; 
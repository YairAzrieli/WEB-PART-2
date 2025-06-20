const db = require('../config/db.config');
const bcrypt = require('bcryptjs');

class User {
    constructor(userData) {
        this.email = userData.email;
        this.password = userData.password;
        this.name = userData.name;
    }

    async save() {
        try {
            const hashedPassword = await bcrypt.hash(this.password, 10);
            const [result] = await db.execute(
                'INSERT INTO users (email, password, name) VALUES (?, ?, ?)',
                [this.email, hashedPassword, this.name]
            );
            return result.insertId;
        } catch (error) {
            throw error;
        }
    }

    static async findByEmail(email) {
        try {
            const [users] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
            return users[0];
        } catch (error) {
            throw error;
        }
    }

    static async verifyPassword(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
}

module.exports = User; 
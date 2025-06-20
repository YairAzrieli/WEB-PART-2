const db = require('../config/db.config');

class Contact {
    static async create(contactData) {
        const { name, email, subject, message } = contactData;
        const query = `
            INSERT INTO contacts (name, email, subject, message, created_at)
            VALUES (?, ?, ?, ?, NOW())
        `;
        
        try {
            const [result] = await db.execute(query, [name, email, subject, message]);
            return result.insertId;
        } catch (error) {
            console.error('Error creating contact:', error);
            throw error;
        }
    }

    static async findAll() {
        const query = `
            SELECT * FROM contacts
            ORDER BY created_at DESC
        `;
        
        try {
            const [contacts] = await db.execute(query);
            return contacts;
        } catch (error) {
            console.error('Error fetching contacts:', error);
            throw error;
        }
    }

    static async findById(id) {
        const query = `
            SELECT * FROM contacts
            WHERE id = ?
        `;
        
        try {
            const [contacts] = await db.execute(query, [id]);
            return contacts[0];
        } catch (error) {
            console.error('Error fetching contact:', error);
            throw error;
        }
    }
}

module.exports = Contact; 
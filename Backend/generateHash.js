// generateHash.js

const bcrypt = require('bcryptjs');

async function generateStaticHash() {
    const password = 'yourStaticPassword';  // Replace with the password you want to hash
    const saltRounds = 10;  // Number of salt rounds (the higher, the more secure but slower)

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('Hashed Password:', hashedPassword);
    } catch (error) {
        console.error('Error hashing password:', error);
    }
}

generateStaticHash();

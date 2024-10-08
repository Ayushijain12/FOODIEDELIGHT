const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restaurant"
})

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL');
});


app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const sql = 'SELECT * FROM users WHERE email = ?';
    const values = [email];

    db.query(sql, values, async (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(200).json({ error: 'Invalid email or password' });
        }

        const user = results[0];

        try {
            const isMatch = await bcrypt.compare(password, user.password_hash);
            if (!isMatch) {
                return res.status(200).json({ error: 'Invalid email or password' });
            }

            return res.status(200).json({ message: 'Login successful', data: user, status : 200 });
        } catch (compareErr) {
            return res.status(500).json({ error: 'Server error' });
        }
    });
})


app.post('/restaurants', (req, res) => {
    const { name, description, phone, email, website, opening_hours, address1, city, state, postal_code } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const sql = 'INSERT INTO restaurants (name, description, phone, email, website, opening_hours, street_address, city, state, postal_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [name, description, phone, email, website, opening_hours, address1, city, state, postal_code];
    
    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json({ message: 'Restaurant created', id: result.insertId, status : 200 });
    });
});


app.get('/restaurants/lists', (req, res) => {
    const sql = 'SELECT * FROM restaurants';

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(results);
    });
});

app.get('/restaurants-id/:id', (req, res) => {
    const { id } = req.params;

    // Ensure the ID is a valid number
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    const sql = 'SELECT * FROM restaurants WHERE id = ?';
    const values = [id];

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json(results[0]);
    });
});


app.put('/edit-restaurants/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, phone, email, website, opening_hours, address1, city, state, postal_code } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const sql = `
        UPDATE restaurants
        SET name = ?, description = ?, phone = ?, email = ?, website = ?, opening_hours = ?, street_address = ?, city = ?, state = ?, postal_code = ?
        WHERE id = ?
    `;
    const values = [name, description, phone, email, website, opening_hours, address1, city, state, postal_code, id];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json({ message: 'Restaurant updated successfully', status : 200 });
    });
});


app.delete('/delete-restaurants/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM restaurants WHERE id = ?';
    const values = [id];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json({ message: 'Restaurant deleted successfully' });
    });
});

app.listen(8081, () => {
    console.log("listening");
})

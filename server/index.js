const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db'); // Import the database connection pool

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// create a todo
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            'INSERT INTO todos (description) VALUES ($1) RETURNING *',
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// get all todo

// get a todo

// update a todo


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


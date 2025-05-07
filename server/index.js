const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db'); // Import the database connection pool

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// create a todo
app.post('/todo', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            'INSERT INTO todo (description) VALUES ($1) RETURNING *',
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// get all todo
app.get("/todo", async(req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// get a todo
app.get("/todo/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// update a todo


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


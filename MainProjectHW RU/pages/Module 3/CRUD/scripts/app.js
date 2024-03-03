const mysql = require('mysql2/promise');
const express = require('express');

const app = express();
const port = 3000;

const dbConfig = {
  host: "127.0.0.1",
  user: "root",
  database: "hw1",
  password: ""
};

const pool = mysql.createPool(dbConfig);

app.use(express.json());

app.post('/user', async (req, res) => {
  try {
    const { name, email, age, country, balance } = req.body;

    if (!name || !email || !age || !country || !balance) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const [result] = await pool.execute(
      'INSERT INTO user (name, email, age, country, balance) VALUES (?, ?, ?, ?, ?)',
      [name, email, age, country, balance]
    );

    res.json({ id: result.insertId, message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/user', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM user');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, age, country, balance } = req.body;

    if (!name || !email || !age || !country || !balance) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    await pool.execute(
      'UPDATE user SET name = ?, email = ?, age = ?, country = ?, balance = ? WHERE id = ?',
      [name, email, age, country, balance, userId]
    );

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    await pool.execute('DELETE FROM user WHERE id = ?', [userId]);

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
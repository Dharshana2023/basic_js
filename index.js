const express = require('express');
const app = express();

// Import mongoose
const mongoose = require('mongoose');

// connect MongoDB
require('./db');  // make sure db.js connects mongoose

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);

// Insert user
const newUser = new User({
  username: 'john_doe',
  mail: 'john_doe@example.com',
  age: 30
});

newUser.save()
  .then(() => console.log('User saved'))
  .catch(err => console.error('Error saving user:', err));

// Route
app.get('/users/:userId/profile', (req, res) => {
  const userId = req.params.userId;
  const name = req.query.name;
  const age = req.query.age;

  res.send(`User ID: ${userId}, Name: ${name}, Age: ${age}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

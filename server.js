const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Environment variables
const AUTH_SECRET = process.env.AUTH_SECRET;
if (!AUTH_SECRET) {
  console.error('FATAL ERROR: AUTH_SECRET not defined.');
  process.exit(1);
}

// Routes
app.post('/login', (req, res) => {
  // Authentication logic for logging in user
  res.send('Login route');
});

app.post('/register', (req, res) => {
  // Authentication logic for registering user
  res.send('Register route');
});

app.get('/profile', (req, res) => {
  // Secure route for retrieving user profile
  res.send('Profile route');
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('Something went wrong');
});

// Start server
app.listen(PORT, () => {
  console.log(`SecureAuthAPI running on port ${PORT}`);
});
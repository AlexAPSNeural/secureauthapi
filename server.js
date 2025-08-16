const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to SecureAuthAPI');
});

// Authentication route example
app.post('/auth/login', (req, res) => {
  // Handle login logic
  res.status(200).send('Login successful');
});

app.post('/auth/register', (req, res) => {
  // Handle registration logic
  res.status(201).send('User registered');
});

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
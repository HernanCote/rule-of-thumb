const config = require('config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const users = require('./routes/users');
const candidates = require('./routes/candidates');
const auth = require('./routes/auth');

const app = express();

if (!config.get('jwtPrivateKey')) {
  console.log('FATAL ERROR: Jwt Private Key is not set');
  process.exit(1);
}

if (!config.get('db')) {
  console.log('FATAL ERROR: db connection string is not defined');
  process.exit(1);
}

mongoose
  .connect(
    config.get('db'),
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDb'))
  .catch(err => console.error('Could not connect to MongoDb', err.message));

app.use(express.json());
app.use(cors());

app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/candidates', candidates);

app.use((req, res, next) => {
  const error = new Error('Resource Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
      statusCode: error.status
    }
  });
});

module.exports = app;

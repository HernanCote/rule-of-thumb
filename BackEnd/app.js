const express = require('express');
const cors = require('cors');

const users = require('./routes/users');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', users);

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

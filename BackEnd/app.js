const config = require('config');
const express = require('express');

const app = express();

require('./startup/config')();
require('./startup/db')();
require('./startup/logging')();
require('./startup/cors')(app);
require('./startup/routes')(app);
require('./startup/validation')();

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

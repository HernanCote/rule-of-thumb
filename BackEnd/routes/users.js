const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const message = 'Hello World';
  res.status(200).send(message);
});

module.exports = router;

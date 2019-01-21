const express = require('express');
const router = express.Router();
const _ = require('lodash');
const bcrypt = require('bcrypt');

const auth = require('../middleware/auth');

const { User, validate, validatePut } = require('../models/user');

router.post('/', async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(409).send('User already exists in the system');
  }

  user = new User(
    _.pick(req.body, ['email', 'password', 'age', 'marriageStatus'])
  );

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  user.save();
  const token = user.generateAuthToken();

  res
    .status(201)
    .header('x-auth-token', token)
    .header('access-control-expose-headers', 'x-auth-token')
    .send(_.pick(user, ['_id', 'email']));
});

// router.put('/', async (req, res, next) => {
//   const { error } = validatePut(req.body);

//   if(error) {
//     return res.status(400).send(error.details[0].message);
//   }

//   let user = await User
// });

module.exports = router;

const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 250,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024
  },
  age: {
    type: Number,
    required: false
  },
  marriageStatus: {
    type: String,
    required: false
  }
});

userSchema.methods.generateAuthToken = function() {
  return jwt.sign(
    { _id: this._id, email: this.email },
    config.get('jwtPrivateKey')
  );
};

function validateUser(user) {
  const schema = {
    email: Joi.string()
      .required()
      .email()
      .min(5)
      .max(250),
    password: Joi.string()
      .min(5)
      .max(250)
      .required(),
    age: Joi.number(),
    marriageStatus: Joi.string()
  };

  return Joi.validate(user, schema);
}

function validatePutUser(user) {
  const schema = {
    email: Joi.string()
      .email()
      .min(5)
      .max(250),
    password: Joi.string()
      .min(5)
      .max(250),
    age: Joi.number(),
    marriageStatus: Joi.string()
  };
}

exports.User = mongoose.model('User', userSchema);
exports.validate = validateUser;
exports.validatePut = validatePutUser;

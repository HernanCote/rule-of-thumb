const mongoose = require('mongoose');
const Joi = require('joi');

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 250
  },
  imageUrl: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 250
  },
  offset: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 250
  },
  industry: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 250
  },
  information: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 250
  },
  thumbsUp: {
    type: Number,
    default: 0
  },
  thumbsDown: {
    type: Number,
    default: 0
  }
});

function validateCandidate(candidate) {
  const schema = {
    name: Joi.string()
      .required()
      .min(3)
      .max(250),
    imageUrl: Joi.string()
      .min(4)
      .max(250)
      .required(),
    offset: Joi.string()
      .required()
      .min(4)
      .max(250),
    industry: Joi.string()
      .required()
      .min(4)
      .max(250),
    information: Joi.string()
      .required()
      .min(10)
      .max(250),
    thumbsUp: Joi.number(),
    thumbsDown: Joi.number()
  };

  return Joi.validate(candidate, schema);
}

exports.Candidate = mongoose.model('Candidate', candidateSchema);
exports.validate = validateCandidate;

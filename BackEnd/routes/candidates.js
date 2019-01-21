const express = require('express');
const router = express.Router();
const _ = require('lodash');
const auth = require('../middleware/auth');

const { Candidate, validate } = require('../models/candidate');
const { User } = require('../models/user');

router.get('/', async (req, res, next) => {
  const candidates = await Candidate.find().sort('name');
  res.status(200).send(candidates);
});

router.get('/:id', async (req, res, next) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    return res.status(200).send(candidate);
  } catch (ex) {
    console.log(ex.message);
    return res
      .status(404)
      .send(`Candidate with id ${req.params.id} was not found`);
  }
});

router.post('/', auth, async (req, res, next) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const candidate = new Candidate(
      _.pick(req.body, [
        'name',
        'imageUrl',
        'offset',
        'industry',
        'information',
        'thumbsUp',
        'thumbsDown'
      ])
    );

    await candidate.save();
    res.status(201).send(candidate);
  } catch (ex) {
    for (field in ex.errors) {
      console.log(ex.errors[field].message);
    }
    res.status(500).send('Ops! Something failed on our side');
  }
});

router.post('/:id/thumbs-up', async (req, res, next) => {
  const model = { candidateId: req.params.id, ...req.body };

  const user = await User.findById(model.userId).select({ _id: 1, email: 1 });
  if (!user) {
    return res.status(400).send('Invalid user');
  }
  const candidate = await Candidate.findById(model.candidateId);

  if (!candidate) {
    return res.status(400).send('Invalid candidate');
  }

  try {
    await Candidate.findOneAndUpdate(
      { _id: candidate._id },
      { $inc: { thumbsUp: 1 } }
    );
    res.status(200).send();
  } catch (ex) {
    console.log(ex.message);
    res.status(400).send(ex.message);
  }
});

router.post('/:id/thumbs-down', async (req, res, next) => {
  const model = { candidateId: req.params.id, ...req.body };

  const user = await User.findById(model.userId).select({ _id: 1, email: 1 });
  if (!user) {
    return res.status(400).send('Invalid user');
  }
  const candidate = await Candidate.findById(model.candidateId);

  if (!candidate) {
    return res.status(400).send('Invalid candidate');
  }

  try {
    await Candidate.findOneAndUpdate(
      { _id: candidate._id },
      { $inc: { thumbsDown: 1 } }
    );
    res.status(200).send();
  } catch (ex) {
    console.log(ex.message);
    res.status(400).send(ex.message);
  }
});

module.exports = router;

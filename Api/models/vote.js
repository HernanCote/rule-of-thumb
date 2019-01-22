const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  candidate: {
    type: new mongoose.Schema({
      name: { type: String, required: true }
    })
  },
  votes: [
    {
      type: new mongoose.Schema({
        email: {
          type: String,
          required: true
        },
        votes: {
          type: Number,
          max: 3,
          default: 0
        }
      })
    }
  ]
});

voteSchema.statics.lookup = function(candidateId) {
  return this.findOne({ 'candidate._id': candidateId });
};

voteSchema.statics.uservoted = function(candiadteId, userId) {
  return this.findOne({ 'candidate._id': candiadteId, 'votes._id': userId });
};

exports.Vote = mongoose.model('Vote', voteSchema);

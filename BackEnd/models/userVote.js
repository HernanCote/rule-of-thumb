const mongoose = require('mongoose');

const userVoteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  votes: [
    {
      candidate: {
        type: new mongoose.Schema({
          name: {
            type: String,
            required: true,
            trim: true
          }
        })
      },
      vote: {
        type: Number,
        required: true,
        min: -1,
        max: 1
      }
    }
  ]
});

exports.UserVote = mongoose.Model('UserVote', userVoteSchema);

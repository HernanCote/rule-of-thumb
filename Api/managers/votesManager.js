const { Vote } = require('../models/vote');

async function submitUserVote(candidate, user) {
  const existingDocument = await Vote.lookup(candidate._id);
  if (!existingDocument) {
    const vote = new Vote({
      candidate: {
        _id: candidate._id,
        name: candidate.name
      },
      votes: [
        {
          _id: user._id,
          email: user.email,
          votes: 1
        }
      ]
    });
    await vote.save();
  } else {
    const userAlreadyVoted = await Vote.uservoted(candidate._id, user._id);
    if (userAlreadyVoted) {
      const votesInfo = await Vote.findOne(
        {
          'candidate._id': candidate._id,
          'votes._id': user._id
        },
        { 'votes.$.votes': 1 }
      );

      if (votesInfo.votes[0].votes >= 3) {
        throw new Error('409');
      }

      await Vote.findOneAndUpdate(
        { 'candidate._id': candidate._id, 'votes._id': user._id },
        { $inc: { 'votes.$.votes': 1 } }
      );
    } else {
      await Vote.findOneAndUpdate(
        { 'candidate._id': candidate._id },
        {
          $push: {
            votes: {
              _id: user._id,
              email: user.email,
              votes: 1
            }
          }
        }
      );
    }
  }
}

module.exports = {
  submitUserVote
};

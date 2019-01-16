import React from 'react';
import PropTypes from 'prop-types';
import VotingCard from './votingCard';

const VotesList = ({ candidates }) => {
  return (
    <div className='grid-list'>
      {candidates.map((candidate, i) => (
        <VotingCard key={i} candidate={candidate} />
      ))}
    </div>
  );
};

VotesList.propTypes = {
  candidates: PropTypes.array.isRequired
};
export default VotesList;

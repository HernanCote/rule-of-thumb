import React from 'react';
import PropTypes from 'prop-types';
import VotingCard from './votingCard';

const VotesList = ({ candidates, refreshCandidatesData }) => {
  return (
    <div className='grid-list'>
      {candidates.map(candidate => (
        <VotingCard
          key={candidate._id}
          candidate={candidate}
          refresh={refreshCandidatesData}
        />
      ))}
    </div>
  );
};

VotesList.propTypes = {
  candidates: PropTypes.array.isRequired,
  refreshCandidatesData: PropTypes.func.isRequired
};
export default VotesList;

import React from 'react';
import PropTypes from 'prop-types';
import CandidateBox from './candidateBox';

const VotesList = ({ candidates }) => {
  return (
    <div className='grid-list'>
      {candidates.map((candidate, i) => (
        <CandidateBox key={i} candidate={candidate} />
      ))}
    </div>
  );
};

VotesList.propTypes = {
  candidates: PropTypes.array.isRequired
};
export default VotesList;

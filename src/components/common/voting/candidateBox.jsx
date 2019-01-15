/* eslint no-undef: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const CandidateBox = ({ candidate }) => {
  return (
    <div className='candidate-box'>
      <div
        className='candidate-box__container'
        style={{
          backgroundImage: `url(${require('../../../assets/' +
            candidate.imageUrl)})`
        }}
      >
        <div className='candidate-box__container__content'>
          {candidate.name}
        </div>
      </div>
    </div>
  );
};

CandidateBox.propTypes = {
  candidate: PropTypes.object.isRequired
};
export default CandidateBox;

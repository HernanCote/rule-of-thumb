import React from 'react';
import { PropTypes } from 'prop-types';

const VoteButton = ({ direction }) => {
  function renderBackground() {
    return direction === 'up' ? 'primary' : 'secondary';
  }
  return (
    <div className={`vote-button ${renderBackground()}`}>
      <i className={`fas fa-thumbs-${direction}`} />
    </div>
  );
};

VoteButton.propTypes = {
  direction: PropTypes.string
};

VoteButton.defaultProps = {
  direction: 'up'
};

export default VoteButton;

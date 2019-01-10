import React from 'react';
import { PropTypes } from 'prop-types';

const Backdrop = ({ onBackdropClick }) => {
  return <div className='backdrop' onClick={onBackdropClick} />;
};

Backdrop.propTypes = {
  onBackdropClick: PropTypes.func.isRequired
};

export default Backdrop;

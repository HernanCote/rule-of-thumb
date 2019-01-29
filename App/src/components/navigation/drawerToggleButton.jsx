import React from 'react';
import { PropTypes } from 'prop-types';

const DrawerToggleButton = ({ click }) => {
  return (
    <button className='toggle-button' onClick={click} aria-label='Open'>
      <div className='toggle-button__line' />
      <div className='toggle-button__line' />
      <div className='toggle-button__line' />
    </button>
  );
};

DrawerToggleButton.propTypes = {
  click: PropTypes.func.isRequired
};

export default DrawerToggleButton;

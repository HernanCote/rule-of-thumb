import React from 'react';
import { PropTypes } from 'prop-types';

const SideDrawer = ({ show }) => {
  let openClass = show === true ? 'open' : '';

  return (
    <nav className={`side-drawer ${openClass}`}>
      <ul>
        <li>
          <a href=''>Past Trials</a>
        </li>
        <li>
          <a href=''>How It Works</a>
        </li>
        <li>
          <a href=''>Login / Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired
};

export default SideDrawer;

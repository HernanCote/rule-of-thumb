import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

const SideDrawer = ({ show, openModal }) => {
  let openClass = show === true ? 'open' : '';

  return (
    <nav className={`side-drawer ${openClass}`}>
      <ul>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/past'>Past Trials</NavLink>
        </li>
        <li>
          <NavLink to='/how'>How It Works</NavLink>
        </li>
        <li>
          <a onClick={openModal}>Login / Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired
};

export default SideDrawer;

import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

const SideDrawer = ({ show, openModal, user, logout }) => {
  let openClass = show === true ? 'open' : '';

  return (
    <aside className={`side-drawer ${openClass}`}>
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
        {!user && (
          <li>
            <a onClick={() => openModal('login')}>Login / Sign Up</a>
          </li>
        )}
        {user && (
          <li>
            <a onClick={logout}>Logout</a>
          </li>
        )}
      </ul>
    </aside>
  );
};

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  user: PropTypes.object,
  logout: PropTypes.func.isRequired
};

export default SideDrawer;

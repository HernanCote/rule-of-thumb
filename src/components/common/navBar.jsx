import React from 'react';
import DrawerToggleButton from './drawerToggleButton';
import { PropTypes } from 'prop-types';

const NavBar = ({ onDrawerToggleClick }) => {
  return (
    <header className='navbar'>
      <nav className='navbar__navigation'>
        <div className='navbar__toggle-button'>
          <DrawerToggleButton click={onDrawerToggleClick} />
        </div>
        <div className='navbar__branding'>
          <a href=''>Rule of Thumb.</a>
        </div>
        <div className='space' />
        <div className='navbar_navigation-items'>
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
            <li>
              <a href=''>
                <i className='fas fa-search' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

NavBar.propTypes = {
  onDrawerToggleClick: PropTypes.func.isRequired
};

export default NavBar;

/* eslint no-undef: 0 */

import React, { Component } from 'react';
import DrawerToggleButton from './drawerToggleButton';
import { PropTypes } from 'prop-types';

class NavBar extends Component {
  state = {
    isMinified: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll = () => {
    if (window.scrollY === 0) {
      this.setState({ isMinified: false });
    } else {
      this.setState({ isMinified: true });
    }
  };
  render() {
    const { onDrawerToggleClick } = this.props;
    return (
      <header className={`navbar ${this.state.isMinified ? 'minified' : ''}`}>
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
  }
}

NavBar.propTypes = {
  onDrawerToggleClick: PropTypes.func.isRequired
};

export default NavBar;

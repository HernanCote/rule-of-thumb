/* eslint no-undef: 0 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import DrawerToggleButton from './drawerToggleButton';

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
    const { onDrawerToggleClick, user } = this.props;
    return (
      <header className={`navbar ${this.state.isMinified ? 'minified' : ''}`}>
        <nav className='navbar__navigation'>
          <div className='navbar__toggle-button'>
            <DrawerToggleButton click={onDrawerToggleClick} />
          </div>
          <div className='navbar__branding'>
            <h1>
              <NavLink to='/'>Rule of Thumb.</NavLink>
            </h1>
          </div>
          <div className='space' />
          <div className='navbar_navigation-items'>
            <ul>
              <li>
                <NavLink to='/past'>Past Trials</NavLink>
              </li>
              <li>
                <NavLink to='/how'>How It Works</NavLink>
              </li>
              {!user && (
                <React.Fragment>
                  <li>
                    <a onClick={() => this.props.openModal('login')}>Login /</a>
                  </li>
                  <li>
                    <a onClick={() => this.props.openModal('signup')}>
                      Sign Up
                    </a>
                  </li>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <li>
                    <a />
                  </li>
                  <li>
                    <a onClick={this.props.logout}>Logout</a>
                  </li>
                </React.Fragment>
              )}
              <li>
                <a>
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
  onDrawerToggleClick: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  user: PropTypes.object,
  logout: PropTypes.func.isRequired
};

export default NavBar;

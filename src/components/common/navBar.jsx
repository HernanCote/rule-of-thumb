import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <ul className='navbar'>
        <li className='branding'>Rule of Thumb.</li>
        <li className='nav__item'>Past Trials</li>
        <li className='nav__item'>How It Works</li>
        <li className='nav__item'>Log In / Sign Up</li>
        <li className='nav__item'>
          <i className='fas fa-search' />
        </li>
      </ul>
    );
  }
}

export default NavBar;

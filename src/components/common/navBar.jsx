import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
  render() {
    return (
      <ul className='navbar'>
        {this.props.navitems.map(item => (
          <li key={item.content} className={item.class}>
            {item.content}
          </li>
        ))}
        <li className='nav__item search'>
          <i className='fas fa-search' />
        </li>
      </ul>
    );
  }
}

NavBar.propTypes = {
  navitems: PropTypes.object.isRequired
};

export default NavBar;

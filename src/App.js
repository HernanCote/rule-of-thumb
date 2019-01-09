import React, { Component } from 'react';
import NavBar from './components/common/navBar';

class App extends Component {
  render() {
    const navitems = [
      { content: 'Rule Of Thumb.', class: 'branding', to: '/' },
      { content: 'Past Trials', class: 'nav__item', to: '/' },
      { content: 'How It Works', class: 'nav__item', to: '/' },
      { content: 'Log In Sign Up', class: 'nav__item', to: '/' }
    ];

    return (
      <div>
        <NavBar navitems={navitems} />
      </div>
    );
  }
}

export default App;

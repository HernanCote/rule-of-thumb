import React, { Component } from 'react';
import NavBar from './components/common/navigation/navBar';
import SideDrawer from './components/common/navigation/sideDrawer';
import Backdrop from './components/common/backdrop';
import Home from './components/pages/home';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleHandle = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop onBackdropClick={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: '100%' }}>
        <NavBar onDrawerToggleClick={this.drawerToggleHandle} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Home />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import NavBar from './components/navigation/navBar';
import SideDrawer from './components/navigation/sideDrawer';
import Backdrop from './components/common/backdrop';
import Home from './components/pages/home';
import Footer from './components/footer/footer';

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
      <React.Fragment>
        <NavBar onDrawerToggleClick={this.drawerToggleHandle} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Home />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

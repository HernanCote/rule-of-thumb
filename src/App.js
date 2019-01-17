import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navigation/navBar';
import SideDrawer from './components/navigation/sideDrawer';
import Backdrop from './components/common/backdrop';
import Footer from './components/footer/footer';

import Home from './components/pages/home';
import PastTrials from './components/pages/pastTrials';
import HowItWorks from './components/pages/howItWorks';
import NotFound from './components/pages/notFound';

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
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/past' component={PastTrials} />
          <Route path='/how' component={HowItWorks} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' exact to='/home' />
          <Redirect to='/not-found' />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

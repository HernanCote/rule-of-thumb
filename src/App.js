import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Modal from './components/common/modal';
import NavBar from './components/navigation/navBar';
import SideDrawer from './components/navigation/sideDrawer';
import LoginForm from './components/auth/loginForm';

import Backdrop from './components/common/backdrop';
import Footer from './components/footer/footer';

import Home from './components/pages/home';
import PastTrials from './components/pages/pastTrials';
import HowItWorks from './components/pages/howItWorks';
import NotFound from './components/pages/notFound';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    showModal: true
  };

  handleModalOpen = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  drawerToggleHandle = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false, showModal: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen || this.state.showModal) {
      backdrop = <Backdrop onBackdropClick={this.backdropClickHandler} />;
    }

    return (
      <React.Fragment>
        <NavBar
          onDrawerToggleClick={this.drawerToggleHandle}
          openModal={this.handleModalOpen}
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        <Modal show={this.state.showModal} handleClose={this.handleModalClose}>
          <LoginForm />
        </Modal>
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

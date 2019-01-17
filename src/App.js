import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Modal from './components/common/modal';
import NavBar from './components/navigation/navBar';
import SideDrawer from './components/navigation/sideDrawer';
import LoginForm from './components/auth/loginForm';
import SignupForm from './components/auth/singupForm';

import Backdrop from './components/common/backdrop';
import Footer from './components/footer/footer';

import Home from './components/pages/home';
import PastTrials from './components/pages/pastTrials';
import HowItWorks from './components/pages/howItWorks';
import NotFound from './components/pages/notFound';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    showModal: false,
    currentModal: ''
  };

  handleModalOpen = modalToShow => {
    this.setState({
      showModal: true,
      sideDrawerOpen: false,
      currentModal: modalToShow
    });
  };

  handleModalClose = () => {
    this.setState({ showModal: false, currentModal: '' });
  };

  drawerToggleHandle = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,
      showModal: false,
      currentModal: ''
    });
  };

  renderModal = currentModal => {
    if (currentModal === 'login') return <LoginForm />;
    else if (currentModal === 'signup') return <SignupForm />;
    else return <span />;
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
        <SideDrawer
          show={this.state.sideDrawerOpen}
          openModal={this.handleModalOpen}
        />
        <Modal show={this.state.showModal} handleClose={this.handleModalClose}>
          {this.renderModal(this.state.currentModal)}
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

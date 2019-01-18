/* eslint no-console: 0 */
/* eslint no-undef: 0 */
import React from 'react';

import Joi from 'joi-browser';
import Form from '../common/form';

class LoginForm extends Form {
  state = {
    data: {
      email: '',
      password: ''
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label('Email'),
    password: Joi.string()
      .required()
      .label('Password')
  };

  doSubmit = () => {
    //TODO implement authentication
    console.log('You logged in!');
  };

  render() {
    return (
      <div className='login-form'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email', 'text', true)}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login', 'login-button')}
        </form>
      </div>
    );
  }
}

export default LoginForm;

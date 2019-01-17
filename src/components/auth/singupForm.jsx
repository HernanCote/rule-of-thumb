/* eslint no-console: 0 */
/* eslint no-undef: 0 */
import React from 'react';

import Joi from 'joi-browser';
import Form from '../common/form';

class SignupForm extends Form {
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
    console.log('You sign up successfully!');
  };

  render() {
    return (
      <div className='login-form'>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email', 'text', true)}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Sign Up', 'login-button')}
        </form>
      </div>
    );
  }
}

export default SignupForm;

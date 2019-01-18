/* eslint no-console: 0 */
/* eslint no-undef: 0 */
import React from 'react';

import Joi from 'joi-browser';
import Form from '../common/form';

class SignupForm extends Form {
  state = {
    data: {
      email: '',
      password: '',
      age: '',
      marriageStatus: ''
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
      .label('Password'),
    age: Joi.number()
      .required()
      .label('Age'),
    marriageStatus: Joi.string()
      .required()
      .label('Marriage Status')
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
          {this.renderInput('email', 'Email', 'text')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('age', 'Age', 'text')}
          {this.renderInput('marriageStatus', 'Marriage Status', 'text')}
          {this.renderButton('Sign Up', 'login-button')}
        </form>
      </div>
    );
  }
}

export default SignupForm;

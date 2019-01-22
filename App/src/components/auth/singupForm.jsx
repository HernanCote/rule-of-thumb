/* eslint no-undef: 0 */
import React from 'react';

import Joi from 'joi-browser';
import Form from '../common/form';

import auth from '../../services/authservices';
import userServices from '../../services/userServices';

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

  doSubmit = async () => {
    try {
      const response = await userServices.signup(this.state.data);
      auth.loginWithJwt(response.headers['x-auth-token']);
      window.location = '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 409) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
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

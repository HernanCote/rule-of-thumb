/* eslint no-console: 0 */
/* eslint no-undef: 0 */
import React from 'react';
import Joi from 'joi-browser';

import Form from '../common/form';
import auth from '../../services/authservices';

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

  doSubmit = async () => {
    const { data } = this.state;
    try {
      await auth.login(data.email, data.password);
      window.location = '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.password = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className='login-form'>
        <h1>Login</h1>
        {this.props.children}
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

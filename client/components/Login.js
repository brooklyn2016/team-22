import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions/';
import { Link, browserHistory } from 'react-router';


class Login extends Component {
handleFormSubmit({ username, password }) {
    // Need to do something to log user in
    //this.props.signinUser({ username, password});
    browserHistory.push('/home'); // go to home route
  }

  render() {
    const { handleSubmit, fields: { username, password }} = this.props;

    return (
      <div>
        <img src="" />
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <label>Username</label>
            <input {...username} type="text" placeholder="Enter username" />
          <label>Password</label>
          <input {...password} type="passsword" placeholder="Enter password" />
        <button action="submit">Login</button>
        <button >Sign in</button>

      </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
}, null, actions)(Login);
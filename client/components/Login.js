import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions/';


class Login extends Component {
  handleFormSubmit({ username, password }) {
      // Need to do something to log user in
      this.props.signinUser({ username, password});
  }

  render() {
    const { handleSubmit, fields: { username, password }} = this.props;

    return (
      <div>
        <img src="https://cantorrelief.org/cantor/wp-content/uploads/2016/07/VictorCruzFoundationLogo.png" />
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

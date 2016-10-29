import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions/';
import { Link, browserHistory } from 'react-router';

class Login extends Component {
  handleFormSubmit({ username, password }) {
    // Need to do something to log user in
    console.log(this.props);
    this.props.signinUser({ username, password });
    // browserHistory.push('/home'); // go to home route
  }

  render() {
    const { handleSubmit, fields: { username, password }} = this.props;

    return (
      <div className="blueGradient">
            <img className="img-responsive center-block small-img" src="img/victorcruz.png" />

        <form className="formMargin text-center" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-group">
            <input className="form-control" {...username} type="text" placeholder="Username" />
          </div>
          <div className="form-group">
            <input className="form-control" {...password} type="password" placeholder="Password" />
          </div>

          <div className="row">
            <div className="col-xs-6 div-button">
              <button className="btn btn-lg btn-success" action="submit">Login</button>
            </div>
            <div className="col-xs-6 div-button">
              <button className="btn btn-lg btn-success">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'Login',
  fields: ['username', 'password']
}, null, actions)(Login);

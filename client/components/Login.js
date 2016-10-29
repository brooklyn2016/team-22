import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions/';
import { Link, browserHistory } from 'react-router';

console.log(actions);
class Login extends Component {
  handleFormSubmit({ username, password }) {
    // Need to do something to log user in
    console.log(username, password);
    //this.props.signInUser({ username, password });
    console.log(this.props);

     browserHistory.push('/home'); // go to home route
  }

  render() {
    const { handleSubmit, fields: { username, password }} = this.props;

    return (
      <div className="blueGradient">
        <div className="row">
          <div className="col-sm-12">
            <img className="img-responsive" src="img/victorcruz.png" />
          </div>
        </div>

        <form className="row" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <div className="col-sm-12">
                <input {...username} type="text" placeholder="Username" />
              </div>
              <div className="col-sm-12">
                <input {...password} type="password" placeholder="Password" />
              </div>
                <button className="col-sm-6" action="submit">Login</button>
                <button className="col-sm-6">Sign up</button>
            </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
}, null, actions)(Login);

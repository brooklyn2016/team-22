const ROOT_URL = 'http://localhost:3000';


import axios from 'axios';
import { browserHistory } from 'react-router';

export function signinUser({ username, password}) {
  // return a function with dispatch coming from redux thunk
  return function(dispatch) {
    axios.post(`${ROOT_URL}/login/`, { username, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/home'); // go to home route
      })
      .catch((response) => {
        console.log(response);
      })
  }
}

export function signupUser({ firstName, lastName, userName, password }) {
  // return a function with dispatch coming from redux thunk
  return function(dispatch) {
    axios.post(`${ROOT_URL}/register/`, { firstName, lastName, userName, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/home'); // go to home route
      })
      .catch((response) => {
        console.log(response);
      })
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }
}

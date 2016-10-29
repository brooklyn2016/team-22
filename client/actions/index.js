const ROOT_URL = 'http://localhost:3000';

import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_LESSONS,
  FETCH_USER,
  FETCH_LEADERBOARD
} from './types';

import axios from 'axios';
import { browserHistory } from 'react-router';

export function signInUser({ username, password }) {
  // return a function with dispatch coming from redux thunk
  return function(dispatch) {
    axios.post(`${ROOT_URL}/login/`, { username, password })
      .then(response => {
        console.log('sad');
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

export function fetchLessons() {
  // return a function with dispatch coming from redux thunk
  return function(dispatch) {
    axios.get(`${ROOT_URL}/lessons/`)
      .then(response => {
        console.log(response);
        dispatch({
          type: FETCH_LESSONS,
          payload: response
        });
      })
      .catch((response) => {
        console.log(response);
      })
  }
}

export function fetchLeaderBoard() {
  // return a function with dispatch coming from redux thunk
  return function(dispatch) {
    axios.get(`${ROOT_URL}/friends/`)
      .then(response => {
        console.log(response);
        dispatch({
          type: FETCH_LEADERBOARD,
          payload: response
        });
      })
      .catch((response) => {
        console.log(response);
      })
  }
}

export function fetchUsers() {
  // return a function with dispatch coming from redux thunk
  return function(dispatch) {
    axios.get(`${ROOT_URL}/user/`)
      .then(response => {
        console.log(response);
        dispatch({
          type: FETCH_USER,
          payload: response
        });
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

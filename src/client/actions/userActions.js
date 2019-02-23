import 'cross-fetch';

import * as types from './userTypes';

export function signInRequest() {
  return {
    type: types.SIGNIN_REQUEST
  };
}

export function signInSuccess(token) {
  return {
    type: types.SIGNIN_SUCCESS,
    token
  };
}

export function signInFailure(error) {
  return {
    type: types.SIGNIN_FAILURE,
    error
  };
}

export function signIn(email, password) {
  return dispatch => {
    dispatch(signInRequest());
    return fetch('http://localhost:3001/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(response => {
        dispatch(signInSuccess(response.token));
        localStorage.setItem('id_token', response.token);
      })
      .catch(error => dispatch(signInFailure(error)));
  };
}

export function signUpRequest() {
  return {
    type: types.SIGNUP_REQUEST
  };
}

export function signUpSuccess(token) {
  return {
    type: types.SIGNUP_SUCCESS,
    token
  };
}

export function signUpFailure(error) {
  return {
    type: types.SIGNUP_FAILURE,
    error
  };
}

export function signUp(email, password) {
  return dispatch => {
    dispatch(signUpRequest());
    return fetch('http://localhost:3001/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(response => {
        dispatch(signUpSuccess(response.token));
        localStorage.setItem('id_token', response.token);
      })
      .catch(error => dispatch(signUpFailure(error)));
  };
}

export function signOut() {
  return dispatch => {
    localStorage.removeItem('id_token');
    dispatch(signOutRequest());
  };
}

export function signOutRequest() {
  return {
    type: types.SIGNOUT_REQUEST
  };
}

import { createLogic } from 'redux-logic';
import { push } from 'react-router-redux';
import { LOGIN_REQUEST, REGISTRATION_REQUEST } from './Auth.constants';
import { loginError, receiveLogin, registrationError, receiveRegistration } from './Auth.actions';

const loginUser = createLogic({
  type: LOGIN_REQUEST,
  latest: true,

  process({ action }, dispatch, done) {
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(action.creds)
    })
      .then(res => res.json()
        .then(user => ({ user, res })))
      .then(({ user, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          return Promise.reject(user);
        }
        localStorage.setItem('token', user.token);
        dispatch(receiveLogin(user));
        dispatch(push('/main'));
        done();
      })
      .catch((err) => {
        dispatch(loginError(err.error.message));
        done();
      });
  }
});

const registrationUser = createLogic({
  type: REGISTRATION_REQUEST,
  latest: true,

  process({ action }, dispatch, done) {
    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(action.creds)
    })
      .then(res => res.json()
        .then(user => ({ user, res })))
      .then(({ user, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          return Promise.reject(user);
        }
        dispatch(receiveRegistration(user));
        dispatch(push('/signin'));
        done();
      })
      .catch((err) => {
        dispatch(registrationError(err.error));
        done();
      });
  }
});

export default [loginUser, registrationUser];

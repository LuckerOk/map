import {
  LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
  REGISTRATION_FAILURE, REGISTRATION_REQUEST, REGISTRATION_SUCCESS,
  LOGOUT_REQUEST, LOGOUT_SUCCESS
} from './Auth.constants';

export function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    creds
  };
}

export const receiveLogin = () => ({ type: LOGIN_SUCCESS });

export function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    message
  };
}

export function requestRegistration(creds) {
  return {
    type: REGISTRATION_REQUEST,
    creds
  };
}

export const receiveRegistration = () => ({ type: REGISTRATION_SUCCESS });

export function registrationError(message) {
  return {
    type: REGISTRATION_FAILURE,
    message
  };
}

export const requestLogout = () => ({ type: LOGOUT_REQUEST });

export const receiveLogout = () => ({ type: LOGOUT_SUCCESS });

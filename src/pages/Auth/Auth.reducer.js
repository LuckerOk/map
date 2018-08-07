import { combineReducers } from 'redux';
import { isAuth } from 'src/services/authManager';
import {
  LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS,
  REGISTRATION_FAILURE, REGISTRATION_SUCCESS
} from './Auth.constants';

function auth(state = {
  isAuthenticated: isAuth()
}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, errorMessage: '' };
    case LOGIN_FAILURE:
      return { ...state, isAuthenticated: false, errorMessage: action.message };
    case REGISTRATION_SUCCESS:
      return { ...state, errorMessage: '' };
    case REGISTRATION_FAILURE:
      return { ...state, errorMessage: action.message };
    case LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}

const authReducer = combineReducers({
  auth
});

export default authReducer;

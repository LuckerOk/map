import { combineReducers } from 'redux';
import { ME_FROM_TOKEN_FAILURE, ME_FROM_TOKEN_SUCCESS } from './Users.constants';
import { LOGOUT_SUCCESS } from '../Auth/Auth.constants';

function meFromToken(state = {}, action) {
  switch (action.type) {
    case ME_FROM_TOKEN_SUCCESS:
      return { ...state, currentUser: action.currentUser.data };
    case ME_FROM_TOKEN_FAILURE:
      return { ...state, errorMessage: action.message };
    case LOGOUT_SUCCESS:
      return { ...state, currentUser: '' };
    default:
      return state;
  }
}

const userReducer = combineReducers({
  meFromToken
});

export default userReducer;

import { ME_FROM_TOKEN_REQUEST, ME_FROM_TOKEN_SUCCESS, ME_FROM_TOKEN_FAILURE } from './Users.constants';

export const requestMeFromToken = () => ({ type: ME_FROM_TOKEN_REQUEST });

export function receiveMeFromToken(currentUser) {
  return {
    type: ME_FROM_TOKEN_SUCCESS,
    currentUser
  };
}

export function meFromTokenError(message) {
  return {
    type: ME_FROM_TOKEN_FAILURE,
    message
  };
}

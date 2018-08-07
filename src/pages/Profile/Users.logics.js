import { createLogic } from 'redux-logic';
import { ME_FROM_TOKEN_REQUEST } from './Users.constants';
import { receiveMeFromToken, meFromTokenError } from './Users.actions';

const meFromToken = createLogic({
  type: ME_FROM_TOKEN_REQUEST,
  latest: true,

  process(_, dispatch, done) {
    fetch('http://localhost:3000/users/data/profile', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
      .then(res => res.json()
        .then(user => ({ user, res })))
      .then(({ user, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          return Promise.reject(user);
        }
        dispatch(receiveMeFromToken(user));
        done();
      })
      .catch((err) => {
        dispatch(meFromTokenError(err.error));
        done();
      });
  }
});

export default [meFromToken];

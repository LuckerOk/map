import auth from '../pages/Auth/Auth.logics';
import users from '../pages/Profile/Users.logics';

const logics = [
  ...auth,
  ...users
];

export default logics;

import auth from '../pages/Auth/Auth.logics';
import users from '../pages/Profile/Users.logics';
import markers from '../pages/Map/Map.logics';

const logics = [
  ...auth,
  ...users,
  ...markers
];

export default logics;

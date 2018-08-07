import { combineReducers } from 'redux';
import authReducer from '../pages/Auth/Auth.reducer';
import userReducer from '../pages/Profile/Users.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer
});

export default rootReducer;

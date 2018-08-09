import { combineReducers } from 'redux';
import authReducer from '../pages/Auth/Auth.reducer';
import userReducer from '../pages/Profile/Users.reducer';
import markersReducer from '../pages/Map/Map.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  markers: markersReducer
});

export default rootReducer;

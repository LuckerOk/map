import { combineReducers } from 'redux';
import {
  SAVE_MARKERS_SUCCESS, SAVE_MARKERS_FAILURE,
  SHOW_MARKERS_SUCCESS, SHOW_MARKERS_FAILURE
} from './Map.constants';

function markers(state = {}, action) {
  switch (action.type) {
    case SAVE_MARKERS_SUCCESS:
      return { ...state, errorMessage: '' };
    case SAVE_MARKERS_FAILURE:
      return { ...state, errorMessage: action.message };
    case SHOW_MARKERS_SUCCESS:
      return { ...state, markers: action.markers.data };
    case SHOW_MARKERS_FAILURE:
      return { ...state, errorMessage: action.message };
    default:
      return state;
  }
}

const markersReducer = combineReducers({
  markers
});

export default markersReducer;

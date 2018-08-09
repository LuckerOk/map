import {
  SAVE_MARKERS_REQUEST, SAVE_MARKERS_SUCCESS, SAVE_MARKERS_FAILURE,
  SHOW_MARKERS_REQUEST, SHOW_MARKERS_SUCCESS, SHOW_MARKERS_FAILURE
} from '../Map/Map.constants';

export function requestSaveMarkers(creds) {
  return {
    type: SAVE_MARKERS_REQUEST,
    creds
  };
}

export const receiveSaveMarkers = () => ({ type: SAVE_MARKERS_SUCCESS });

export function saveMarkersError(message) {
  return {
    type: SAVE_MARKERS_FAILURE,
    message
  };
}

export const requestShowMarkers = () => ({ type: SHOW_MARKERS_REQUEST });

export function receiveShowMarkers(markers) {
  return {
    type: SHOW_MARKERS_SUCCESS,
    markers
  };
}

export function showMarkersError(message) {
  return {
    type: SHOW_MARKERS_FAILURE,
    message
  };
}

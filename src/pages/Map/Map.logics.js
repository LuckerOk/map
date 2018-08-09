import { createLogic } from 'redux-logic';
import { SAVE_MARKERS_REQUEST, SHOW_MARKERS_REQUEST } from './Map.constants';
import {
  receiveSaveMarkers, saveMarkersError,
  receiveShowMarkers, showMarkersError,
  requestShowMarkers
} from './Map.actions';

const saveMarkers = createLogic({
  type: SAVE_MARKERS_REQUEST,
  latest: true,

  process({ action }, dispatch, done) {
    fetch('http://localhost:3000/markers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(action.creds)
    })
      .then(res => res.json()
        .then(markers => ({ markers, res })))
      .then(({ markers, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          return Promise.reject(markers);
        }
        dispatch(receiveSaveMarkers(markers));
        dispatch(requestShowMarkers());
        done();
      })
      .catch((err) => {
        dispatch(saveMarkersError(err.error));
        done();
      });
  }
});

const showMarkers = createLogic({
  type: SHOW_MARKERS_REQUEST,
  latest: true,

  process(_, dispatch, done) {
    fetch('http://localhost:3000/markers', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
      .then(res => res.json()
        .then(markers => ({ markers, res })))
      .then(({ markers, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          return Promise.reject(markers);
        }
        dispatch(receiveShowMarkers(markers));
        done();
      })
      .catch((err) => {
        dispatch(showMarkersError(err.error));
        done();
      });
  }
});

export default [saveMarkers, showMarkers];

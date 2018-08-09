import { connect } from 'react-redux';
import Map from './Map.component';
import { requestSaveMarkers, requestShowMarkers } from './Map.actions';

const mapStateToProps = state => ({
  markers: state.markers.markers.markers
});

const mapDispatchToProps = dispatch => ({
  onSaveMarkersClick: (creds) => {
    dispatch(requestSaveMarkers(creds));
  },
  showMarkers: () => {
    dispatch(requestShowMarkers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);

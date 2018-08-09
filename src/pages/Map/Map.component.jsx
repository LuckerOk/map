import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class Map extends Component {
  constructor() {
    super();

    this.options = {
      markers: {}, // eslint-disable-line no-undef
      map: {}
    };

    this.handleShowMarkers = this.handleShowMarkers.bind(this);
    this.handleSaveMarkers = this.handleSaveMarkers.bind(this);
  }

  componentDidMount() {
    DG.then(() => { // eslint-disable-line no-undef
      this.options.markers = DG.featureGroup(); // eslint-disable-line no-undef
      const markers = this.options.markers;

      this.options.map = DG.map('map', { // eslint-disable-line no-undef
        center: [46.48, 30.73],
        zoom: 13
      });
      const map = this.options.map;

      map.locate({ setView: true, watch: true })
        .on('locationfound', (e) => {
          DG.marker([e.latitude, e.longitude]).addTo(map); // eslint-disable-line no-undef
        })
        .on('locationerror', () => {
          DG.popup() // eslint-disable-line no-undef
            .setLatLng(map.getCenter())
            .setContent('Доступ к определению местоположения отключён')
            .openOn(map);
        });

      map.on('click', (e) => {
        DG.marker([e.latlng.lat, e.latlng.lng]).addTo(markers); // eslint-disable-line no-undef
        markers.addTo(map);
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.markers !== prevProps.markers) {
      this.showMarkers();
    }
  }

  handleShowMarkers() {
    this.props.showMarkers();
  }

  showMarkers() {
    const markers = this.options.markers;
    const map = this.options.map;
    this.props.markers.map(item =>
      DG.marker([item.latitude, item.longitude]).addTo(markers)); // eslint-disable-line no-undef
    markers.addTo(map);
    map.fitBounds(markers.getBounds());
  }

  handleSaveMarkers() {
    const markers = this.options.markers;
    const markerList = Object.values(markers._layers);

    markerList.map((marker) => { // eslint-disable-line array-callback-return
      const creds = {
        latitude: marker._latlng.lat,
        longitude: marker._latlng.lng
      };

      this.props.onSaveMarkersClick(creds);
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          id="save"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleSaveMarkers}
        >
          save markers
        </Button>
        <Button
          id="show"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleShowMarkers}
        >
          show markers
        </Button>
        <div id="map" />
      </div>
    );
  }
}

Map.propTypes = {
  classes: PropTypes.object.isRequired,
  markers: PropTypes.array,
  showMarkers: PropTypes.func.isRequired,
  onSaveMarkersClick: PropTypes.func.isRequired
};

Map.defaultProps = {
  markers: []
};


export default withStyles(styles)(Map);

import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    DG.then(() => { // eslint-disable-line no-undef
      const map = DG.map('map', { // eslint-disable-line no-undef
        center: [54.98, 82.89],
        zoom: 13
      });

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
    });
  }

  render() {
    return (
      <div id="map" />
    );
  }
}

export default Map;

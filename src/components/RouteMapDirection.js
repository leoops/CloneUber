import React, { Component } from 'react';
import MapViewDirections from 'react-native-maps-directions';

export default class RouteMapDirection extends Component {
  render() {
    const { origin, destination, onReady } = this.props;
    return (
      <MapViewDirections
        origin={origin}
        destination={destination}
        strokeColor="#000"
        strokeWidth={3}
        onReady={onReady}
      />
    );
  }
}

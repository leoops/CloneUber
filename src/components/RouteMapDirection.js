import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

export default class RouteMapDirection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { origin, destination } = this.props;
    return (
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey="YOUR_KEY"
      />
    );
  }
}

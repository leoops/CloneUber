import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import RouteMapDirection from './RouteMapDirection';
import SearchBar from './SearchBar';
import { getPixelSize } from '../Utils';
import markerImage from '../assets/marker.png';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.mapRef= null,
  }

  getMapRef = ref => {
    this.setState({ mapRef: ref });
  };

  onReady = result => {
      this.mapRef.fitToCOordinates(result.coordinates, {
          edgePadding: {
              right: getPixelSize(50),
              left: getPixelSize(50),
              top: getPixelSize(50),
              bottom: getPixelSize(50),
          }
      })
  };

  render() {
    const { region, origin, destination, handleLocationSelected } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          showsUserLocation
          loadingEnabled
          region={region}
          ref={this.getMapRef}
        >
          <Fragment>
            <Marker coordinate={destination} anchor={{ x: 0, y: 0 }} image={markerImage}/>
            <RouteMapDirection
              origin={origin}
              destination={destination}
              onReady={this.onReady}
            />
          </Fragment>
        </MapView>
        <SearchBar onPress={handleLocationSelected} />
      </View>
    );
  }
}

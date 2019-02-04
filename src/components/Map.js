import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getPixelSize } from '../Utils';

import SearchBar from './SearchBar';
import RouteMapDirection from './RouteMapDirection';

import markerImage from '../assets/marker.png';

import {
  LocationBox,
  LocationText,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeTextSmall,
} from './Styles';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.mapRef = null;
    this.state = { duration: null };
  }

  getMapRef = ref => {
    this.mapRef = ref;
  };

  onReady = result => {
    this.setState({ duration: Math.floor(result.duration) });
    this.mapRef.fitToCoordinates(result.coordinates, {
      edgePadding: {
        right: getPixelSize(50),
        left: getPixelSize(50),
        top: getPixelSize(50),
        bottom: getPixelSize(350),
      },
    });
  };

  render() {
    const { duration } = this.state;
    const {
      region,
      origin,
      destination,
      location,
      handleLocationSelected,
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          showsUserLocation
          loadingEnabled
          region={region}
          ref={this.getMapRef}
        >
          {destination && (
            <Fragment>
              <Marker coordinate={origin} anchor={{ x: 0, y: 0 }}>
                <LocationBox>
                  <LocationTimeBox>
                    <LocationTimeText>{duration}</LocationTimeText>
                    <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                  </LocationTimeBox>
                  <LocationText>{location}</LocationText>
                </LocationBox>
              </Marker>
              <Marker
                coordinate={destination}
                anchor={{ x: 0, y: 0 }}
                image={markerImage}
              >
                <LocationBox>
                  <LocationText>{destination.title}</LocationText>
                </LocationBox>
              </Marker>
              <RouteMapDirection
                origin={origin}
                destination={destination}
                onReady={this.onReady}
              />
            </Fragment>
          )}
        </MapView>
        <SearchBar onPress={handleLocationSelected} />
      </View>
    );
  }
}

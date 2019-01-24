import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import SearchBar from '../components/SearchBar';
import RouteMapDirection from '../components/RouteMapDirection';

export default class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
      origin: null,
      destination: null,
    };
  }

  componentDidMount = () => {
    this.getUserLocation();
  };

  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const region = {
          latitude,
          longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        };
        this.setState({ region: region });
      },
      error => {
        console.warn(error);
      },
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      }
    );
  };

  getRouter = (data, description) => {
    this.setState(previousState => ({
      origin: {
        latitude: previousState.region.latitude,
        longitude: previousState.region.longitude,
      },
      destination: {
        latitude: description.geometry.location.lat,
        longitude: description.geometry.location.lng,
      },
    }));
  };
  render() {
    const { region, origin, destination } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          showsUserLocation
          loadingEnabled
          region={region}
        >
          <RouteMapDirection origin={origin} destination={destination} />
        </MapView>
        <SearchBar onPress={this.getRouter} />
      </View>
    );
  }
}

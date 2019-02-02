import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import SearchBar from '../components/SearchBar';
import RouteMapDirection from '../components/RouteMapDirection';
import Geocoder from 'react-native-geocoding';
import Map from '../components/Map';

Geocoder.init('AIzaSyAtNFSLm1KhADnkief5lI_803sgu1RWLuk');

export default class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: null,
      region: null,
      destination: null,
      location: null,
      duration: null,
    };
  }

  componentDidMount = () => {
    this.getUserLocation();
  };

  getUserLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const response = await Geocoder.from({ latitude, longitude });
        const address = response.results[0].formatted_address;
        const location = address.substring(0, address.indexOf(','));
        const region = {
          latitude,
          longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        };
        this.setState({ region: region, location: location });
      },
      error => {
        console.warn(error);
      },
      {
        timeout: 2000,
        maximumAge: 1000,
      }
    );
  };

  handleLocationSelected = (data, description) => {
    this.setState(previousState => ({
      origin: {
        latitude: previousState.region.latitude,
        longitude: previousState.region.longitude,
      },
      destination: {
        latitude: description.geometry.location.lat,
        longitude: description.geometry.location.lng,
        title: data.structured_formatting.main_text,
      },
    }));
  };
  render() {
    const { region, origin, destination, location } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Map
          style={{ flex: 1 }}
          showsUserLocation
          loadingEnabled
          region={region}
          origin={origin}
          destination={destination}
          location={location}
        />
        <SearchBar onPress={this.handleLocationSelected} />
      </View>
    );
  }
}

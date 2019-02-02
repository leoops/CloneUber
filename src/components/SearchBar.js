import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchFocused: false };
  }

  render = () => {
    const { onPress } = this.props;
    const { searchFocused } = this.state;
    return (
      <GooglePlacesAutocomplete
        placeholder="Busca"
        placeholderTextColor="#333"
        minLenght={3}
        enablePoweredByContainer={false}
        autoFocus={false}
        fetchDetails
        listViewDisplayed={searchFocused}
        onPress={onPress}
        returnKeyType={'search'}
        textinputProps={{
          onFocus: () => {
            this.setState({ searchFocused: false });
          },
          onBlur: () => {
            this.setState({ searchFocused: true });
          },
          autoCaptalize: 'none',
          autoCorrect: false,
        }}
        query={{
          key: 'YOUR_KEY',
          language: 'pt-BR',
          types: '(cities)',
        }}
        styles={{
          container: styles.container,
          textInputContainer: styles.textInputContainer,
          textInput: styles.textInput,
          listView: styles.listView,
          description: styles.description,
          row: styles.rows,
        }}
      />
    );
  };
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // TODO: Incluir SafeAreaView
    top: 40,
    left: 0,
    right: 0,
  },
  textInput: {
    height: 54,
    margin: 0,
    borderRadius: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    fontSize: 18,
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: '#0000',
    height: 54,
    marginHorizontal: 20,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  listView: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    marginHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 15,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
  },
  row: { padding: 20, height: 58 },
});


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BleedingEdgeApplication from './app/App';

import rootReducer from './rootReducer'
import configureStore from './store/storeConfig';
import { Provider } from 'react-redux'
const store = configureStore();

export default class makingProgress extends Component {
  render() {
    return (
      <Provider store={store}>
        <BleedingEdgeApplication/>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('makingProgress', () => makingProgress);

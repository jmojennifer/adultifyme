/*jshint esversion: 6 */
/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import Router from './src/Router';

export default class adultifyme extends Component {
  render() {
     return (
        <Router />
      )
  }
}
AppRegistry.registerComponent('adultifyme', () => adultifyme);

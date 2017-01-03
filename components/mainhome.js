/*jshint esversion: 6 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';



export default class MainHome extends Component {
  static get defaultProps() {
    return {
      description: 'Adultify Me'
    };
  }

    render() {
      return (
        <View>
          <Text>Main Home Page</Text>
        </View>
      )
    }

}

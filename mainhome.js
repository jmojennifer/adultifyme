/*jshint esversion: 6 */
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';



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
MainHome.propTypes = {
  description: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
};

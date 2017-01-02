/*jshint esversion: 6 */
import React, { Component, PropTypes } from 'react';
import { View, Navigator, Text, TouchableHighlight } from 'react-native';

import MainHome from './mainhome';

export default class InitialDialogue extends Component {
  static get defaultProps() {
    return {
      description: 'Adultify Me'
    };
  }

  render() {
    return (
      <View>
        <View>
          <Text>{this.props.description}</Text>
          <TouchableHighlight onPress={this.props.onForward}>
            <Text>Next</Text>
          </TouchableHighlight>
        </View>

        <Navigator
          initialRoute={{id: 'InitialDialogue', name: 'Dialogue', index: 1}}
          renderScene={(route, navigator) =>
            <MainHome description={route.description}
            // Function to call when a new scene should be displayed
            onForward={() => {
              const nextIndex = route.index + 1;
                navigator.push({
                  description: "Main Home Page",
                  index: nextIndex,
                });
              }}
            />
          }
        />
      </View>
    )
  }
}

InitialDialogue.propTypes = {
  description: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
};

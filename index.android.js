/*jshint esversion: 6 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import InitialDialogue from './initialdialogue';

export default class adultifyme extends Component {
  render() {
     return (
      <Navigator
        initialRoute={{id: 'LaunchPage', name: 'Launch', index: 0}}
        renderScene={(route, navigator) =>
          <InitialDialogue description={route.description}
          // Function to call when a new scene should be displayed
          onForward={() => {
            const nextIndex = route.index + 1;
              navigator.push({
                description: "Hi! Welcome to Adultify Me. Adulting is hard. I get it. Let's try to make it a bit easier",
                index: nextIndex,
              });
            }}
          />
        }
        />
      )
    }
  }

AppRegistry.registerComponent('adultifyme', () => adultifyme);

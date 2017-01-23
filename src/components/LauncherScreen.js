/*jshint esversion: 6 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginForm from './LoginForm';


class LauncherScreen extends Component {
  render() {
    return (
      <View style={styles.initialDialogueCardSection}>
        <View>
          <Text style={styles.textStyle}>Login</Text>
        </View>
        <LoginForm />
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  initialDialogueCardSection: {
    backgroundColor: '#D5C2AD',
    borderColor: '#D5C2AD'
  }
};

export default LauncherScreen;

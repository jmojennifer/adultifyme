/*jshint esversion: 6 */
import React from 'react';
import { View, Text } from 'react-native';
import LoginForm from './LoginForm';

const LauncherScreen = () => {
  return (
    <View>
      <View>
        <Text style={styles.textStyle}>Adultify Me</Text>
      </View>
      <LoginForm />
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 18,
    alignSelf: 'center'
  }
};

export default LauncherScreen;

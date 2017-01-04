/*jshint esversion: 6 */
import React from 'react';
import { View } from 'react-native';
import Logo from './Logo';
import Star from './Star';

const AppHeader = () => {
  return (
    <View style={styles.appHeaderStyle}>
      <View>
        <Logo />
      </View>
      <View style={styles.starMenuStyle}>
        <View>
          <Star />
        </View>
        <View>
          <Star />
        </View>
      </View>
    </View>
  );
};

const styles = {
  appHeaderStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  starMenuStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  }
};

export default AppHeader;

/*jshint esversion: 6 */
import React from 'react';
import { View } from 'react-native';
import Logo from './Logo';
import Star from './Star';
import DrawerMenu from './DrawerMenu';

const AppHeader = () => {
  return (
    <View style={styles.appHeaderStyle}>
      <View>
        <Logo />
      </View>
      <View>
        <Star />
      </View>
      <View>
        <DrawerMenu />
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
    justifyContent: 'space-around'
  }
};

export default AppHeader;

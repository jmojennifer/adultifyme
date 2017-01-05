/*jshint esversion: 6 */
import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      style={styles.logoStyle}
      source={require('../images/PlaceholderLogo.jpg')}
    />
  );
};

const styles = {
  logoStyle: {
    width: 50,
    height: 50,
    marginLeft: 10
  }
};

export default Logo;

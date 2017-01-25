import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      style={styles.logoStyle}
      source={require('../images/AdultifyMeTransparentLogo50x50.png')}
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

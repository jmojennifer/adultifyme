/*jshint esversion: 6 */
import React from 'react';
import { Image } from 'react-native';

const Star = () => {
  return (
    <Image
      style={styles.starStyle}
      source={require('../images/star_gold_32.png')}
    />
  );
};

const styles = {
  starStyle: {
    width: 25,
    height: 25
  }
};

export default Star;

/*jshint esversion: 6 */
import React from 'react';
import { Image } from 'react-native';

const DeleteIcon = () => {
  return (
    <Image
      style={styles.deleteStyle}
      source={require('../images/Delete.png')}
    />
  );
};

const styles = {
  deleteStyle: {
    width: 24,
    height: 24
  }
};

export default DeleteIcon;

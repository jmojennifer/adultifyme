/*jshint esversion: 6 */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const EditIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <Image
      style={styles.editStyle}
      source={require('../images/Edit.png')}
    />
    </TouchableOpacity>
  );
};

const styles = {
  editStyle: {
    width: 24,
    height: 24
  }
};

export default EditIcon;

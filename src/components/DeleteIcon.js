import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const DeleteIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <Image
      style={styles.deleteStyle}
      source={require('../images/Delete.png')}
    />
    </TouchableOpacity>
  );
};

const styles = {
  deleteStyle: {
    width: 40,
    height: 40
  }
};

export default DeleteIcon;

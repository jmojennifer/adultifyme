import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, borderWidth }) => {
  const { buttonStyle, textStyle } = styles;
  buttonStyle.borderWidth = borderWidth;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#F8F8F8',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#22333B',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F8F8F8',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };

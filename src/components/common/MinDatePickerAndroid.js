import React from 'react';
import {
  DatePickerAndroid,
  TouchableWithoutFeedback,
  View,
  Text
} from 'react-native';

const MinDatePickerAndroid = ({ label, value, onPickChange }) => {
  const showPicker = async (options) => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        return 'dismissed';
      } else {
        let date = new Date(year, month, day);
        date = date.toLocaleDateString();
        return date;
      }
    } catch ({ code, message }) {
      console.warn('Error in example: ', message);
    }
  };

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
        <TouchableWithoutFeedback>
          <View
            onPress={showPicker.bind({
              date: value,
              minDate: new Date(),
            })}
            onPickChange={onPickChange}
          />
        </TouchableWithoutFeedback>
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  textStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { MinDatePickerAndroid };

import React, { Component } from 'react';
import {
  DatePickerAndroid,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

class MinDatePickerAndroid extends Component {
  showPicker = async (options) => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        return 'No date selected';
      } else {
        const date = new Date(year, month, day);
        this.props.formUpdate({
          prop: this.props.datePickerDateField,
          value: date.toLocaleDateString() });
      }
    } catch ({ code, message }) {
      console.warn('Error in example', message);
    }
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <TouchableWithoutFeedback
          style={styles.touchableFeedback}
          onPress={this.showPicker.bind(this, { minDate: new Date(),
          })}
        >
          <View>
            <Text style={styles.textStyle}>
              {this.props.datePickerDate}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = {
  touchableFeedback: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  textStyle: {
    color: '#000',
    paddingLeft: 32,
    paddingTop: 10,
    fontSize: 18,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export default MinDatePickerAndroid;

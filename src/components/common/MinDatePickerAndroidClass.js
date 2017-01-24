import React, { Component } from 'react';
import {
  DatePickerAndroid,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';


class MinDatePickerAndroidClass extends Component {
  state = {
    minText: 'Date',
  };

  showPicker = async (stateKey, options) => {
    try {
      const newState = {};
      const { action, year, month, day } = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        const date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({ code, message }) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <TouchableWithoutFeedback
          style={styles.touchableFeedback}
          onPress={this.showPicker.bind(this, 'min', {
            date: this.state.minDate,
            minDate: new Date(),
          })}
        >
          <View>
            <Text style={styles.textStyle}>
              {this.state.minText}
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

export { MinDatePickerAndroidClass };

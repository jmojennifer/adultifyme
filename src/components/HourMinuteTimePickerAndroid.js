import React, { Component } from 'react';
import {
  TimePickerAndroid,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

class HourMinuteTimePickerAndroid extends Component {
  formatTime(hour, minute) {
    let formattedHour = hour;
    let amPM;

    if (hour === 0) {
      amPM = 'AM';
      formattedHour = 12;
    } else if (hour > 0 && hour < 12) {
      amPM = 'AM';
      formattedHour = hour;
    } else if (hour === 12) {
      amPM = 'PM';
    } else if (hour > 12) {
      formattedHour = hour - 12;
      amPM = 'PM';
    }

    return `${formattedHour}:${(minute < 10 ? `0${minute}` : minute)} ${amPM}`;
  }

  showPicker = async (options) => {
    try {
      const { action, minute, hour } = await TimePickerAndroid.open(options);
      if (action === TimePickerAndroid.timeSetAction) {
        this.props.formUpdate({
          prop: this.props.timePickerField,
          value: this.formatTime(hour, minute)
        });
      } else if (action === TimePickerAndroid.dismissedAction) {
        return 'No Time Selected';
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
          onPress={this.showPicker.bind(this, { })}
        >
          <View>
            <Text style={this.props.style}>
              {this.props.timePickerTime}
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
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export default HourMinuteTimePickerAndroid;

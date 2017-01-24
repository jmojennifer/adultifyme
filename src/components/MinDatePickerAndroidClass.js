import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  DatePickerAndroid,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

class MinDatePickerAndroidClass extends Component {
  showPicker = async (options) => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        return 'No date selected';
      } else {
        const date = new Date(year, month, day);
        this.props.formUpdate({ prop: 'dueDate', value: date.toLocaleDateString() });
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
          onPress={this.showPicker.bind(this, { date: this.props.Date, minDate: new Date(),
          })}
        >
          <View>
            <Text style={styles.textStyle}>
              {this.props.dueDate}
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

const mapStateToProps = (state, ownProps) => {
  const { dueDate } = state.taskForm;
  const { formUpdate } = ownProps;
  return { dueDate, ownProps };
};

export default connect(mapStateToProps, { })(MinDatePickerAndroidClass);

import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { recurringFormUpdate } from '../actions';
import MinDatePickerAndroid from './MinDatePickerAndroid';
import HourMinuteTimePickerAndroid from './HourMinuteTimePickerAndroid';
import { CardSection, Input } from './common';

class RecurringTaskForm extends Component {
  render() {
    return (
      <View>
      <CardSection style={styles.formCardSection}>
        <Input
          label="Title"
          placeholder="i.e. Take Vitamin C"
          value={this.props.title}
          onChangeText={text => this.props.recurringFormUpdate({ prop: 'title', value: text })
          }
        />
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Input
          label="Description"
          placeholder="i.e. Take 2 pills each evening."
          value={this.props.description}
          onChangeText={
            text => this.props.recurringFormUpdate({ prop: 'description', value: text })
          }
        />
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Input
          label="Personal Motivation"
          placeholder="i.e. Let's not get sick!"
          value={this.props.personalMotivation}
          onChangeText={
            text => this.props.recurringFormUpdate({ prop: 'personalMotivation', value: text })
          }
        />
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Text style={styles.pickerTextStyle}>Category</Text>
        <Picker
          style={styles.categoryPickerStyle}
          selectedValue={this.props.category}
          onValueChange={
            selection => this.props.recurringFormUpdate({ prop: 'category', value: selection })
          }
        >
          <Picker.Item label="Finance" value="Finance" />
          <Picker.Item label="Health/Medical" value="Health/Medical" />
          <Picker.Item label="Fitness" value="Fitness" />
          <Picker.Item label="Career" value="Career" />
          <Picker.Item label="Personal Wellness" value="Personal Wellness" />
          <Picker.Item label="Household" value="Household" />
          <Picker.Item label="Social" value="Social" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Text style={styles.pickerTextStyle}>Recurring Once Every: </Text>
        <Picker
          style={styles.categoryPickerStyle}
          selectedValue={this.props.frequency}
          onValueChange={
            selection => this.props.recurringFormUpdate({ prop: 'frequency', value: selection })
          }
        >
          <Picker.Item label="Hour" value='hour' />
          <Picker.Item label="Day" value='day' />
          <Picker.Item label="Week" value='week' />
        </Picker>
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Text style={styles.pickerTextStyle}>Recurrence Start Date</Text>
        <MinDatePickerAndroid
          style={styles.datePickerStyle}
          formUpdate={this.props.recurringFormUpdate}
          datePickerDate={this.props.startDate}
          datePickerDateField="startDate"
        />
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Text style={styles.pickerTextStyle}>Recurring Time</Text>
        <HourMinuteTimePickerAndroid
          style={styles.timePickerStyle}
          formUpdate={this.props.recurringFormUpdate}
          timePickerTime={this.props.recurringTime}
          timePickerField="recurringTime"
        />
      </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 10
  },
  categoryPickerStyle: {
    flex: 1,
    marginHorizontal: 25
  },
  datePickerStyle: {
    color: '#000',
    paddingLeft: 35.25,
    paddingTop: 12,
    fontSize: 15,
    flex: 2
  },
  timePickerStyle: {
    color: '#000',
    paddingLeft: 90,
    paddingTop: 12,
    fontSize: 15,
    flex: 2
  },
  formCardSection: {
    backgroundColor: '#F8F8F8',
    borderColor: '#F8F8F8'
  }
};

const mapStateToProps = (state) => {
const {
    title, description, personalMotivation, category, frequency, startDate, endDate, recurringTime
} = state.recurringTaskForm;

  return {
    title, description, personalMotivation, category, frequency, startDate, endDate, recurringTime
  };
};

export default connect(mapStateToProps, { recurringFormUpdate })(RecurringTaskForm);

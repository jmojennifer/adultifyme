import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { formUpdate } from '../actions';
import MinDatePickerAndroid from './MinDatePickerAndroid';
import HourMinuteTimePickerAndroid from './HourMinuteTimePickerAndroid';
import { CardSection, Input } from './common';

class TaskForm extends Component {
  render() {
    return (
      <View>
      <CardSection style={styles.formCardSection}>
        <Input
          label="Title"
          placeholder="i.e. Dentist Appointment"
          value={this.props.title}
          onChangeText={text => this.props.formUpdate({ prop: 'title', value: text })
          }
        />
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Input
          label="Description"
          placeholder="i.e. Routine Cleaning"
          value={this.props.description}
          onChangeText={text => this.props.formUpdate({ prop: 'description', value: text })}
        />
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Input
          label="Personal Motivation"
          placeholder="i.e. Teeth don't grow back!"
          value={this.props.personalMotivation}
          onChangeText={text => this.props.formUpdate({ prop: 'personalMotivation', value: text })}
        />
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Text style={styles.pickerTextStyle}>Category</Text>
        <Picker
          style={styles.categoryPickerStyle}
          selectedValue={this.props.category}
          onValueChange={selection => this.props.formUpdate({ prop: 'category', value: selection })}
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
        <Text style={styles.pickerTextStyle}>Due Date</Text>
        <MinDatePickerAndroid
          style={styles.datePickerStyle}
          formUpdate={this.props.formUpdate}
          datePickerDate={this.props.dueDate}
          datePickerDateField="dueDate"
        />
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Text style={styles.pickerTextStyle}>Time Due</Text>
        <HourMinuteTimePickerAndroid
          style={styles.timePickerStyle}
          formUpdate={this.props.formUpdate}
          timePickerTime={this.props.timeDue}
          timePickerField="timeDue"
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
    paddingLeft: 30,
    paddingTop: 12,
    fontSize: 15,
    flex: 2
  },
  timePickerStyle: {
    color: '#000',
    paddingLeft: 27,
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
  const { title, description, personalMotivation, category, dueDate, timeDue } = state.taskForm;

  return { title, description, personalMotivation, category, dueDate, timeDue };
};

export default connect(mapStateToProps, { formUpdate })(TaskForm);

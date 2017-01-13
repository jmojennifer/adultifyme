import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { recurringFormUpdate } from '../actions';
import { CardSection, Input } from './common';

class RecurringTaskForm extends Component {
  render() {
    return (
      <View>
      <CardSection>
        <Input
          label="Title"
          placeholder="i.e. Take Vitamin C"
          value={this.props.title}
          onChangeText={text => this.props.recurringFormUpdate({ prop: 'title', value: text })
          }
        />
      </CardSection>

      <CardSection>
        <Input
          label="Description"
          placeholder="Take 2 pills each evening with a full glass of water"
          value={this.props.description}
          onChangeText={
            text => this.props.recurringFormUpdate({ prop: 'description', value: text })
          }
        />
      </CardSection>

      <CardSection>
        <Input
          label="Personal Motivation"
          placeholder="i.e. Let's not get sick!"
          value={this.props.personalMotivation}
          onChangeText={
            text => this.props.recurringFormUpdate({ prop: 'personalMotivation', value: text })
          }
        />
      </CardSection>

      <CardSection>
        <Text style={styles.pickerTextStyle}>Category</Text>
        <Picker
          style={styles.pickerStyle}
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

      <CardSection>
        <Text style={styles.pickerTextStyle}>Recurring Once Every: </Text>
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.props.frequency}
          onValueChange={
            selection => this.props.recurringFormUpdate({ prop: 'frequency', value: selection })
          }
        >
          <Picker.Item label="Day" value="Day" />
          <Picker.Item label="Week" value="Week" />
          <Picker.Item label="Month" value="Month" />
          <Picker.Item label="Year" value="Year" />
        </Picker>
      </CardSection>

      <CardSection>
        <Input
          label="Recurrence Start Date"
          placeholder="i.e. 1/27/2017"
          value={this.props.startDate}
          onChangeText={text => this.props.recurringFormUpdate({ prop: 'startDate', value: text })}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Recurrence End Date"
          placeholder="i.e. 4/27/2017 (or empty if N/A)"
          value={this.props.endDate}
          onChangeText={text => this.props.recurringFormUpdate({ prop: 'endDate', value: text })}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Recurring Time"
          placeholder="i.e. 1:14PM"
          value={this.props.recurringTime}
          onChangeText={
            text => this.props.recurringFormUpdate({ prop: 'recurringTime', value: text })
          }
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
  pickerStyle: {
    flex: 1,
    marginHorizontal: 25
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

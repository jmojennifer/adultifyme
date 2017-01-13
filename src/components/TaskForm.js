import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { taskUpdate } from '../actions';
import { CardSection, Input } from './common';

class TaskForm extends Component {
  render() {
    return (
      <View>
      <CardSection>
        <Input
          label="Title"
          placeholder="i.e. Take Vitamin C"
          value={this.props.title}
          onChangeText={text => this.props.taskUpdate({ prop: 'title', value: text })
          }
        />
      </CardSection>

      <CardSection>
        <Input
          label="Description"
          placeholder="Take 2 pills each evening with a full glass of water"
          value={this.props.description}
          onChangeText={text => this.props.taskUpdate({ prop: 'description', value: text })}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Personal Motivation"
          placeholder="i.e. Let's not get sick!"
          value={this.props.personalMotivation}
          onChangeText={text => this.props.taskUpdate({ prop: 'personalMotivation', value: text })}
        />
      </CardSection>

      <CardSection>
        <Text style={styles.pickerTextStyle}>Category</Text>
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.props.category}
          onValueChange={selection => this.props.taskUpdate({ prop: 'category', value: selection })}
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
        <Input
          label="Due Date"
          placeholder="i.e. 1/27/2017"
          value={this.props.dueDate}
          onChangeText={text => this.props.taskUpdate({ prop: 'dueDate', value: text })}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Time Due"
          placeholder="i.e. 1:14PM"
          value={this.props.timeDue}
          onChangeText={text => this.props.taskUpdate({ prop: 'timeDue', value: text })}
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
  const { title, description, personalMotivation, category, dueDate, timeDue } = state.taskForm;

  return { title, description, personalMotivation, category, dueDate, timeDue };
};

export default connect(mapStateToProps, { taskUpdate })(TaskForm);

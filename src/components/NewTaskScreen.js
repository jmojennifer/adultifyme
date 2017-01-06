import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { taskCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class TaskCreateScreen extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Title"
            placeholder="i.e. Take Vitamin C"
            value={this.props.title}
            onChangeText={text => this.props.taskCreate({ prop: 'title', value: text })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Description"
            placeholder="Take 2 pills each evening with a full glass of water"
            value={this.props.description}
            onChangeText={text => this.props.taskCreate({ prop: 'description', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Personal Motivation"
            placeholder="i.e. Let's not get sick!"
            value={this.props.personal_motivation}
            onChangeText={text => this.props.taskCreate({ prop: 'personal_motivation', value: text })}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerTextStyle}>Category</Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={this.props.category}
            onValueChange={selection => this.props.taskCreate({ prop: 'category', value: selection })}
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
            value={this.props.due_date}
            onChangeText={text => this.props.taskCreate({ prop: 'due_date', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Time Due"
            placeholder="5:00PM"
            value={this.props.time_due}
            onChangeText={text => this.props.taskCreate({ prop: 'time_due', value: text })}
          />
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
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
}

const mapStateToProps = (state) => {
  const { title, description, personal_motivation, category, due_date, time_due } = state.taskForm;

  return { title, description, personal_motivation, category, due_date, time_due };
};

export default connect(mapStateToProps, { taskCreate })(TaskCreateScreen);

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { taskUpdate, taskCreate, reminderCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import TaskForm from './TaskForm';

class TaskCreateScreen extends Component {
  onButtonPress() {
    const {
      title, description, personalMotivation, category, dueDate, timeDue, reminderID
    } = this.props;

    if (Platform.OS === 'android') {
      this.props.reminderCreate({
        title,
        description,
        personalMotivation,
        category: category || 'Finance',
        dueDate,
        timeDue,
        onReminderCreation: ((id) => {
          this.props.taskCreate({
            // Because an empty string in JS is falsy,
            // and the Iniitial State for category will be '',
            // if the picker stays on Monday it will be falsy || 'Finance';
            // 'Finance' will be set as the new category state
            title,
            description,
            personalMotivation,
            category: category || 'Finance',
            dueDate,
            timeDue,
            reminderID: id
          });
        })
      });
    } else {
      this.props.taskCreate({
        // Because an empty string in JS is falsy, and the Iniitial State for category will be '',
        // if the picker stays on Monday it will be falsy || 'Finance';
        // 'Finance' will be set as the new category state
        title,
        description,
        personalMotivation,
        category: category || 'Finance',
        dueDate,
        timeDue
      });
    }
  }

  render() {
    return (
      <Card>
        <TaskForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    title, description, personalMotivation, category, dueDate, timeDue, reminderID
  } = state.taskForm;

  return { title, description, personalMotivation, category, dueDate, timeDue, reminderID };
};

export default connect(mapStateToProps,
  { taskUpdate, taskCreate, reminderCreate })(TaskCreateScreen);

import React, { Component } from 'react';
import Notification from 'react-native-system-notification';
import { Platform, ScrollView } from 'react-native';
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
        taskCreateOnReminderCreation: ((id) => {
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

  onButton2Press() {
    Notification.getIDs().then((ids) => {
      for (let i = 0; i < ids.length; i++) {
        Notification.find(ids[i]).then((notification) => {
          console.log(notification);
        });
      }
    });
  }

  onButton3Press() {
    Notification.deleteAll();
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <TaskForm {...this.props} />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={this.onButton2Press.bind(this)}>
              Check Reminders
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={this.onButton3Press.bind(this)}>
              Delete Reminders
            </Button>
          </CardSection>
        </Card>
      </ScrollView>
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

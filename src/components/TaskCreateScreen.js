import React, { Component } from 'react';
import { Platform, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PushNotification from '../PushNotification';
import { taskUpdate, taskCreate, reminderCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import TaskForm from './TaskForm';

class TaskCreateScreen extends Component {
  onButtonPress() {
    let newId = new Date().getTime();
    newId &= 0xffffffff;
    newId = newId.toString();

    const {
      title, description, personalMotivation, category, dueDate, timeDue, reminderID
    } = this.props;

    if (Platform.OS === 'android') {
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
        reminderID: newId
      });
      this.props.reminderCreate({
        // Because an empty string in JS is falsy, and the Iniitial State for category will be '',
        // if the picker stays on Monday it will be falsy || 'Finance';
        // 'Finance' will be set as the new category state
        title,
        description,
        personalMotivation,
        category: category || 'Finance',
        dueDate,
        timeDue,
        reminderID: newId
      });
    } else {
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
        timeDue
      });
    }
  }
  onButton2Press() {
    PushNotification.cancelAllLocalNotifications()
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
              Delete All Reminders
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

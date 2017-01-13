import _ from 'lodash';
import React, { Component } from 'react';
import Notification from 'react-native-system-notification';
import { connect } from 'react-redux';
import { taskUpdate, taskSave, reminderSave } from '../actions';
import { Card, CardSection, Button } from './common';
import TaskForm from './TaskForm';

class TaskEditScreen extends Component {
  componentWillMount() {
    _.each(this.props.task, (value, prop) => {
      this.props.taskUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const {
      title, description, personalMotivation, category, dueDate, timeDue, reminderID
    } = this.props;
    this.props.taskSave({
      title,
      description,
      personalMotivation,
      category,
      dueDate,
      timeDue,
      reminderID,
      uid: this.props.task.uid
    });

    this.props.reminderSave({
      title,
      description,
      personalMotivation,
      category,
      dueDate,
      timeDue,
      reminderID
    });
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

  onButton4Press() {
    Notification.find(this.props.reminderID).then((notification) => {
      console.log(notification);
    });
  }


  render() {
    return (
      <Card>
        <TaskForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
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
      <CardSection>
        <Button onPress={this.onButton4Press.bind(this)}>
          Check Reminder
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

export default connect(mapStateToProps, {
   taskUpdate, taskSave, reminderSave
 })(TaskEditScreen);

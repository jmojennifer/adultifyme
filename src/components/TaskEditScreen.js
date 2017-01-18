import _ from 'lodash';
import React, { Component } from 'react';
import { Platform, ScrollView } from 'react-native';
import PushNotification from 'react-native-push-notification';
import { connect } from 'react-redux';
import { formUpdate, taskSave, reminderSave } from '../actions';
import { Card, CardSection, Button } from './common';
import TaskForm from './TaskForm';

class TaskEditScreen extends Component {
  componentWillMount() {
    _.each(this.props.task, (value, prop) => {
      this.props.formUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const {
      title,
      description,
      personalMotivation,
      category,
      dueDate,
      timeDue,
      reminderID
    } = this.props;

    if (Platform.OS === 'android') {
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
    } else {
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
  }

  onButton2Press() {
    PushNotification.cancelAllLocalNotifications();
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <TaskForm {...this.props} />
            <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                Save Changes
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

const mapStateToProps = state => {
  const {
    title, description, personalMotivation, category, dueDate, timeDue, reminderID
  } = state.taskForm;

  return { title, description, personalMotivation, category, dueDate, timeDue, reminderID };
};

export default connect(mapStateToProps, {
   formUpdate, taskSave, reminderSave
 })(TaskEditScreen);

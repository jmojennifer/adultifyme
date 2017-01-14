import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Notification from 'react-native-system-notification';
import { connect } from 'react-redux';
import { recurringFormUpdate, recurringTaskSave, recurringReminderSave } from '../actions';
import { Card, CardSection, Button } from './common';
import RecurringTaskForm from './RecurringTaskForm';

class RecurringTaskEditScreen extends Component {
  componentWillMount() {
    _.each(this.props.recurringTask, (value, prop) => {
      this.props.recurringFormUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const {
      title,
      description,
      personalMotivation,
      category,
      frequency,
      startDate,
      endDate,
      recurringTime,
      reminderID
    } = this.props;

    this.props.recurringTaskSave({
      title,
      description,
      personalMotivation,
      category,
      frequency,
      startDate,
      endDate,
      recurringTime,
      reminderID,
      uid: this.props.recurringTask.uid
    });

    this.props.recurringReminderSave({
      title,
      description,
      personalMotivation,
      category,
      frequency,
      startDate,
      endDate,
      recurringTime,
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
      <ScrollView>
        <Card>
          <RecurringTaskForm {...this.props} />
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
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    title,
    description,
    personalMotivation,
    category,
    frequency,
    startDate,
    endDate,
    recurringTime,
    reminderID
  } = state.recurringTaskForm;

  return {
    title,
    description,
    personalMotivation,
    category,
    frequency,
    startDate,
    endDate,
    recurringTime,
    reminderID
  };
};

export default connect(mapStateToProps, {
   recurringFormUpdate, recurringTaskSave, recurringReminderSave
 })(RecurringTaskEditScreen);

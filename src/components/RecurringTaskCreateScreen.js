import React, { Component } from 'react';
import Notification from 'react-native-system-notification';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { recurringTaskCreate, recurringReminderCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import RecurringTaskForm from './RecurringTaskForm';

class RecurringTaskCreateScreen extends Component {
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

    if (Platform.OS === 'android') {
      this.props.recurringReminderCreate({
        title,
        description,
        personalMotivation,
        category: category || 'Finance',
        frequency: frequency || 'day',
        startDate,
        endDate,
        recurringTime,
        recurringTaskCreateOnReminderCreation: ((id) => {
          this.props.recurringTaskCreate({
            // Because an empty string in JS is falsy,
            // and the Iniitial State for category will be '',
            // if the picker stays on Monday it will be falsy || 'Finance';
            // 'Finance' will be set as the new category state
            title,
            description,
            personalMotivation,
            category: category || 'Finance',
            frequency: frequency || 'day',
            startDate,
            endDate,
            recurringTime,
            reminderID: id
          });
        })
      });
    } else {
      this.props.recurringTaskCreate({
        // Because an empty string in JS is falsy, and the Iniitial State for category will be '',
        // if the picker stays on Monday it will be falsy || 'Finance';
        // 'Finance' will be set as the new category state
        title,
        description,
        personalMotivation,
        category: category || 'Finance',
        frequency,
        startDate,
        endDate,
        recurringTime,
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
      <Card>
        <RecurringTaskForm {...this.props} />
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

export default connect(mapStateToProps,
  { recurringTaskCreate, recurringReminderCreate })(RecurringTaskCreateScreen);

import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';
import { Platform, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {
  recurringCreateFormStateReset,
  recurringTaskCreate,
  recurringReminderCreate
} from '../actions';
import { Card, CardSection, Button } from './common';
import RecurringTaskForm from './RecurringTaskForm';

class RecurringTaskCreateScreen extends Component {
  componentWillMount() {
    this.props.recurringCreateFormStateReset();
  }

  onButtonPress() {
    let newId = new Date().getTime();
    newId &= 0xffffffff;
    newId = newId.toString();

    const {
      title,
      description,
      personalMotivation,
      category,
      frequency,
      startDate,
      recurringTime,
      reminderID
    } = this.props;

    this.props.recurringTaskCreate({
      // Because an empty string in JS is falsy,
      // and the Iniitial State for category will be '',
      // if the picker stays on Monday it will be falsy || 'Finance';
      // 'Finance' will be set as the new category state
      title,
      description,
      personalMotivation,
      category: category || 'Finance',
      frequency: frequency || 'minute',
      startDate,
      recurringTime,
      reminderID: newId
    });

    if (Platform.OS === 'android') {
      this.props.recurringReminderCreate({
        // Because an empty string in JS is falsy,
        // and the Iniitial State for category will be '',
        // if the picker stays on Monday it will be falsy || 'Finance';
        // 'Finance' will be set as the new category state
        title,
        description,
        personalMotivation,
        category: category || 'Finance',
        frequency: frequency || 'minute',
        startDate,
        recurringTime,
        reminderID: newId
      });
    }
  }

  onButton2Press() {
    PushNotification.cancelAllLocalNotifications();
  }

  render() {
    return (
      <ScrollView>
        <Card style={styles.formCard}>
          <RecurringTaskForm {...this.props} />
          <CardSection style={styles.buttonCardSection}>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardSection>
          <CardSection style={styles.buttonCardSection}>
            <Button onPress={this.onButton2Press.bind(this)}>
              Delete All Reminders
            </Button>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  formCard: {
    borderRadius: 3
  },
  buttonCardSection: {
    backgroundColor: '#F8F8F8',
    borderColor: '#F8F8F8'
  }
};

const mapStateToProps = (state) => {
  const {
    title,
    description,
    personalMotivation,
    category,
    frequency,
    startDate,
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
    recurringTime,
    reminderID
  };
};

export default connect(mapStateToProps,
  { recurringCreateFormStateReset, recurringTaskCreate, recurringReminderCreate })(RecurringTaskCreateScreen);

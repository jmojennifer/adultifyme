import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PushNotification from 'react-native-push-notification';
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
      recurringTime,
      reminderID
    });
  }

  onButton2Press() {
        PushNotification.cancelAllLocalNotifications();
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

export default connect(mapStateToProps, {
   recurringFormUpdate, recurringTaskSave, recurringReminderSave
 })(RecurringTaskEditScreen);

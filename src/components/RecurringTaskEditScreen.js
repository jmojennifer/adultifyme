import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
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

  render() {
    return (
      <ScrollView>
        <Card style={styles.formCard}>
          <RecurringTaskForm {...this.props} />
            <CardSection style={styles.buttonCardSection}>
              <Button onPress={this.onButtonPress.bind(this)}>
                Save Changes
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

export default connect(mapStateToProps, {
   recurringFormUpdate, recurringTaskSave, recurringReminderSave
 })(RecurringTaskEditScreen);

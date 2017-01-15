import React, { Component } from 'react';
import { Platform, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { taskUpdate, taskCreate, reminderCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import TaskForm from './TaskForm';

class TaskCreateScreen extends Component {
  onButtonPress() {
  let newId = new Date().getTime();
  newId &= 0xffffffff;

  const nowMS = moment().millisecond();
  const dueDateTime = `${dueDate} ${timeDue}`;
  const deadline = nowMS - moment(
    dueDateTime, 'MM-DD-YYYY hh:mm:ssa'
  ).format().millisecond();

    const {
      title, description, personalMotivation, category, dueDate, timeDue, reminderID, deadline
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
        deadline,
        reminderID: reminderID || newId
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
        reminderID: reminderID || newId
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
    title, description, personalMotivation, category, dueDate, timeDue, reminderID, deadline
  } = state.taskForm;

  return { title, description, personalMotivation, category, dueDate, timeDue, reminderID, deadline };
};

export default connect(mapStateToProps,
  { taskUpdate, taskCreate, reminderCreate })(TaskCreateScreen);

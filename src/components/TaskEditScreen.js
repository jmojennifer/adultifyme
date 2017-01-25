import React, { Component } from 'react';
import _ from 'lodash';
import { Platform, ScrollView } from 'react-native';
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

  render() {
    return (
      <ScrollView>
        <Card style={styles.formCard}>
          <TaskForm {...this.props} />
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

const mapStateToProps = state => {
  const {
    title, description, personalMotivation, category, dueDate, timeDue, reminderID
  } = state.taskForm;

  return { title, description, personalMotivation, category, dueDate, timeDue, reminderID };
};

export default connect(mapStateToProps, {
   formUpdate, taskSave, reminderSave
 })(TaskEditScreen);

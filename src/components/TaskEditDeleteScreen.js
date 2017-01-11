import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskUpdate, taskSave, reminderSave } from '../actions';
import { Card, CardSection, Button } from './common';
import TaskForm from './TaskForm';

class TaskEditDeleteScreen extends Component {
  componentWillMount() {
    _.each(this.props.task, (value, prop) => {
      this.props.taskUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { title, description, personalMotivation, category, dueDate, timeDue, reminderID } = this.props;
    this.props.taskSave({
      title,
      description,
      personalMotivation,
      category,
      dueDate,
      timeDue,
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

  render() {
    return (
      <Card>
        <TaskForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, description, personalMotivation, category, dueDate, timeDue, reminderID } = state.taskForm;

  return { title, description, personalMotivation, category, dueDate, timeDue, reminderID };
};

export default connect(mapStateToProps, { taskUpdate, taskSave, reminderSave })(TaskEditDeleteScreen);

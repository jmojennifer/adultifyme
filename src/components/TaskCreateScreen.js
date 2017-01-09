import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskUpdate, taskCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import TaskForm from './TaskForm';

class TaskCreateScreen extends Component {
  onButtonPress() {
    const { title, description, personalMotivation, category, dueDate, timeDue } = this.props;

    // Because an empty string in JS is falsy, and the Iniitial State for category will be '',
    // if the picker stays on Monday it will be falsy || 'Finance';
    // 'Finance' will be set as the new category state
    this.props.taskCreate({
      title,
      description,
      personalMotivation,
      category: category || 'Finance',
      dueDate,
      timeDue
    });
  }

  render() {
    return (
      <Card>
        <TaskForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, description, personalMotivation, category, dueDate, timeDue } = state.taskForm;

  return { title, description, personalMotivation, category, dueDate, timeDue };
};

export default connect(mapStateToProps, { taskUpdate, taskCreate })(TaskCreateScreen);

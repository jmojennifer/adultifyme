import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';

class TaskListItem extends Component {
  render() {
    const { title } = this.props.task;
    const { category } = this.props.task;
    const { due_date } = this.props.task;
    const { time_due } = this.props.task;

    return (
      <CardSection>
        <View>
          <View style={styles.taskStyle}>
            <Text style={styles.textStyle}>
              - {title} ({category})
            </Text>
          </View>
          <View style={styles.taskStyle}>
            <Text style={styles.textStyle}>
              Due: {due_date} at {time_due}
            </Text>
          </View>
        </View>
      </CardSection>
    );
  }
}

const styles = {
  taskStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  textStyle: {
    fontSize: 15,
    marginRight: 5
  }
};

export default TaskListItem;

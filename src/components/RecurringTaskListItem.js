import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';

class RecurringTaskListItem extends Component {
  render() {
    const { title } = this.props.recurringTasks;
    const { category } = this.props.recurringTasks;
    const { dueDate } = this.props.recurringTasks;
    const { timeDue } = this.props.recurringTasks;

    return (
      <CardSection>
        <View>
          <View style={styles.taskStyle}>
            <Text style={styles.textStyle}>
              * {title} ({category})
            </Text>
          </View>
          <View style={styles.taskStyle}>
            <Text style={styles.textStyle}>
              Due: {dueDate} {timeDue}
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

export default RecurringTaskListItem;

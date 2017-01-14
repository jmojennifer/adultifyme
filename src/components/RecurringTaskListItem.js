import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection, renderIf } from './common';

class RecurringTaskListItem extends Component {
  render() {
    const { title } = this.props.recurringTask;
    const { category } = this.props.recurringTask;
    const { startDate } = this.props.recurringTask;
    const { recurringTime } = this.props.recurringTask;
    const { endDate } = this.props.recurringTask;

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
              Due: {startDate} {recurringTime}
            </Text>
            {renderIf(endDate !== '',
              <Text style={styles.textStyle}>
                Ending: {endDate}
              </Text>)}
            {renderIf(endDate === '',
              <Text style={styles.textStyle}>
                Ending: Not set
              </Text>)}
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

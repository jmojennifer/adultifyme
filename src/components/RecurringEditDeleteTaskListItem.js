
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Confirm, renderIf } from './common';
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';
import { recurringTaskDelete, recurringReminderDelete } from '../actions';

class RecurringEditDeleteTaskListItem extends Component {
  state = { showModal: false };

  onEditIconPress() {
    Actions.recurringTaskEditScreen({ recurringTask: this.props.recurringTask });
  }

  onDeleteIconPress() {
    this.setState({ showModal: !this.state.showModal });
  }

  onAccept() {
    const { uid } = this.props.recurringTask;
    const { reminderID } = this.props.recurringTask;

    this.props.recurringTaskDelete({ uid });
    this.props.recurringReminderDelete({ reminderID });
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    const { title } = this.props.recurringTask;
    const { category } = this.props.recurringTask;
    const { startDate } = this.props.recurringTask;
    const { recurringTime } = this.props.recurringTask;
    const { frequency } = this.props.recurringTask;

    return (
      <CardSection>
        <View>
          <View style={styles.taskStyle}>
            <Text style={styles.textStyle}>
              {title} ({category}){'\n'}
              Due: {startDate} {recurringTime}{'\n'}
              Frequency:
            </Text>
            {renderIf(frequency === 'hour', <Text style={styles.textStyle}>
            Hourly</Text>)}

            {renderIf(frequency === 'day',
            <Text style={styles.textStyle}>Daily</Text>)}

            {renderIf(frequency === 'week',
            <Text style={styles.textStyle}>Weekly</Text>)}
          </View>
          <View style={styles.iconStyle}>
            <EditIcon onPress={this.onEditIconPress.bind(this)} />
            <DeleteIcon onPress={this.onDeleteIconPress.bind(this)} />
          </View>
          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to delete this?
          </Confirm>
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
    marginRight: 5,
    flexWrap: 'wrap'
  },
  iconStyle: {
    flex: -1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
};

export default connect(null, {
  recurringTaskDelete, recurringReminderDelete })(RecurringEditDeleteTaskListItem);

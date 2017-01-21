
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Confirm, renderIf } from './common';
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
      <Card style={styles.customCardStyle} >
        <CardSection style={styles.taskCardSectionStyle}>
          <View>
            <Text style={styles.textStyle}>
              {title} ({category}){'\n'}
              Due: {startDate} {recurringTime}{'\n'}
              Frequency:
              {renderIf(frequency === 'hour',
                ' Hourly'
              )}

              {renderIf(frequency === 'day',
                ' Daily'
              )}

              {renderIf(frequency === 'week',
                ' Weekly'
              )}
            </Text>
          </View>
        </CardSection>
        <CardSection style={styles.iconCardSectionStyle}>
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
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  customCardStyle: {
    backgroundColor: 'white',
    borderRadius: 3
  },
  taskCardSectionStyle: {
    flex: 1,
    borderBottomWidth: 0,
    borderColor: '#D5C2AD',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textStyle: {
    fontSize: 15,
    marginRight: 5,
    flexWrap: 'wrap'
  },
  iconCardSectionStyle: {
    flex: 3,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  textCardSectionStyle: {
    borderBottomWidth: 0,
    borderColor: '#fff'
  }
};

export default connect(null, {
  recurringTaskDelete, recurringReminderDelete })(RecurringEditDeleteTaskListItem);

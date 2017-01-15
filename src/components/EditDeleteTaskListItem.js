import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Confirm } from './common';
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';
import { taskDelete, reminderDelete } from '../actions';

class EditDeleteTaskListItem extends Component {
  state = { showModal: false };

  onEditIconPress() {
    Actions.taskEditScreen({ task: this.props.task });
  }

  onDeleteIconPress() {
    this.setState({ showModal: !this.state.showModal });
  }

  onAccept() {
    const { uid } = this.props.task;
    const { reminderID } = this.props.task;

    this.props.taskDelete({ uid });
    this.props.reminderDelete({ reminderID });
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    const { title } = this.props.task;
    const { category } = this.props.task;
    const { dueDate } = this.props.task;
    const { timeDue } = this.props.task;

    return (
      <CardSection>
        <View style={styles.taskStyle}>
          <Text style={styles.textStyle}>
            {title} ({category}){'\n'}
            Due: {dueDate} {timeDue}
          </Text>
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
      </CardSection>
    );
  }
}

const styles = {
  taskStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textStyle: {
    fontSize: 15,
    marginRight: 5,
    flexWrap: 'wrap'
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
};

export default connect(null, { taskDelete, reminderDelete })(EditDeleteTaskListItem);

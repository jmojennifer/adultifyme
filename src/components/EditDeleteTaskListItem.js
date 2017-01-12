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

    console.log(reminderID);

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
    // const { timeDue } = this.props.task;

    return (
      <CardSection>
        <View>
          <View style={styles.taskStyle}>
            <EditIcon onPress={this.onEditIconPress.bind(this)} />

            <DeleteIcon onPress={this.onDeleteIconPress.bind(this)} />
            <Confirm
              visible={this.state.showModal}
              onAccept={this.onAccept.bind(this)}
              onDecline={this.onDecline.bind(this)}
            >
              Are you sure you want to delete this?
            </Confirm>

            <Text style={styles.textStyle}>
              {title} ({category})
            </Text>
          </View>
          <View style={styles.taskStyle}>
            <Text style={styles.textStyle}>
              Due: {dueDate}
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

export default connect(null, { taskDelete, reminderDelete })(EditDeleteTaskListItem);

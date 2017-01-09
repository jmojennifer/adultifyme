import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Confirm } from './common';
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';

class EditDeleteTaskListItem extends Component {
  state = { showModal: false };

  onEditIconPress() {
    Actions.taskEditDeleteScreen({ task: this.props.task });
  }

  onDeleteIconPress() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { title } = this.props.task;
    const { category } = this.props.task;
    const { dueDate } = this.props.task;
    const { timeDue } = this.props.task;

    return (
      <CardSection>
        <View>
          <View style={styles.taskStyle}>
            <EditIcon onPress={this.onEditIconPress.bind(this)} />

            <DeleteIcon onPress={this.onDeleteIconPress.bind(this)} />
            <Confirm
              visible={this.state.showModal}
            >
              Are you sure you want to delete this?
            </Confirm>

            <Text style={styles.textStyle}>
              {title} ({category})
            </Text>
          </View>
          <View style={styles.taskStyle}>
            <Text style={styles.textStyle}>
              Due: {dueDate} at {timeDue}
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

export default EditDeleteTaskListItem;

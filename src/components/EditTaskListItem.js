import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';

class EditTaskListItem extends Component {
  onEditPress() {
    Actions.taskCreateScreen({ task: this.props.task });
  }

  onDeletePress() {

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
            <EditIcon onPress={this.onEditPress.bind(this)} />
            <DeleteIcon onPress={this.onDeletePress.bind(this)} />
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

export default EditTaskListItem;

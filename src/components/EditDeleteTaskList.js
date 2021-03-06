import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import _ from 'lodash';
import { tasksFetch } from '../actions';
import EditDeleteTaskListItem from './EditDeleteTaskListItem';

class EditDeleteTaskList extends Component {
  componentWillMount() {
    this.props.tasksFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props this component will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ tasks }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(tasks);
  }

  renderRow(task) {
    return <EditDeleteTaskListItem task={task} />;
  }

  render() {
    return (
      <View>
        <Text
          style={styles.headerStyle}
        >
          Tasks
        </Text>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 5,
    alignSelf: 'center'
  }
};

const mapStateToProps = state => {
  const tasks = _.map(state.tasks, (val, uid) => {
    return { ...val, uid }; // sample result:
    // { title: 'Eat more veggies', description: 'carrots, peas, etc.',
    // personal_motivation: 'It's good for me!',  category: 'health/medical',
    // due_date: '1/8/2017', time_due: '2:00PM' };
    // then each of these is put into an array via .map
  });

  return { tasks };
};

export default connect(mapStateToProps, { tasksFetch })(EditDeleteTaskList);

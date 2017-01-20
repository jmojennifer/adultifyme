// I would have prefered to have a conditional in TaskList.js
// that selected which TaskListItem to render based on what page
// the TaskList component was used. Difficulty passing props led
// me to this initial non-DRY solution; refactoring to be more DRY if time.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import _ from 'lodash';
import { recurringTasksFetch } from '../actions';
import RecurringEditDeleteTaskListItem from './RecurringEditDeleteTaskListItem';

class RecurringEditDeleteTaskList extends Component {
  componentWillMount() {
    this.props.recurringTasksFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props this component will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ recurringTasks }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(recurringTasks);
  }

  renderRow(recurringTask) {
    return <RecurringEditDeleteTaskListItem recurringTask={recurringTask} />;
  }

  render() {
    return (
      <View>
        <Text
          style={styles.headerStyle}
        >
          Recurring Tasks
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
  const recurringTasks = _.map(state.recurringTasks, (val, uid) => {
    return { ...val, uid }; // sample result:
    // { title: 'Eat more veggies', description: 'carrots, peas, etc.',
    // personal_motivation: 'It's good for me!',  category: 'health/medical',
    // due_date: '1/8/2017', time_due: '2:00PM' };
    // then each of these is put into an array via .map
  });

  return { recurringTasks };
};

export default connect(mapStateToProps, { recurringTasksFetch })(RecurringEditDeleteTaskList);

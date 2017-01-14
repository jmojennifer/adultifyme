import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, ScrollView } from 'react-native';
import _ from 'lodash';
import { recurringTasksFetch } from '../actions';
import RecurringTaskListItem from './RecurringTaskListItem';

class RecurringTaskList extends Component {
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
    return <RecurringTaskListItem recurringTask={recurringTask} />;
  }

  render() {
    return (
      <ScrollView>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </ScrollView>
    );
  }
}

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

export default connect(mapStateToProps, { recurringTasksFetch })(RecurringTaskList);

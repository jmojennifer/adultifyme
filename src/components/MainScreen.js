/*jshint esversion: 6 */
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import EditDeleteTaskList from './EditDeleteTaskList';
import RecurringEditDeleteTaskList from './RecurringEditDeleteTaskList';
import { Card } from './common';
import { starCountCreate } from '../actions';

class MainScreen extends Component {
  componentWillMount() {
    this.props.starCountCreate();
  }

  render() {
    return (
      <View>
        <AppHeader />
          <ScrollView>
            <Card style={{ backgroundColor: '#D5C2AD', borderWidth: 0 }}>
              <EditDeleteTaskList />
              <RecurringEditDeleteTaskList />
            </Card>
          </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const thisStarCount = state.starCounts;
  return thisStarCount;
};

export default connect(mapStateToProps, { starCountCreate })(MainScreen);

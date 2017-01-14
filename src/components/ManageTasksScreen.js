/*jshint esversion: 6 */
import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import EditDeleteTaskList from './EditDeleteTaskList';
import RecurringEditDeleteTaskList from './RecurringEditDeleteTaskList';

const ManageTasksScreen = () => {
  return (
    <View>
      <View>
        <Button
          onPress={() => {
            Actions.taskCreateScreen();
          }}
        >
        New Task
        </Button>
        <View>
          <EditDeleteTaskList />
        </View>
        <Button
          onPress={() => {
            Actions.recurringTaskCreateScreen();
          }}
        >
        New Recurring Task Series
        </Button>
      </View>
      <View>
        <RecurringEditDeleteTaskList />
      </View>
    </View>
  );
};

export default ManageTasksScreen;

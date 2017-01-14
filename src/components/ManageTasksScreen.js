/*jshint esversion: 6 */
import React from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import EditDeleteTaskList from './EditDeleteTaskList';
import RecurringEditDeleteTaskList from './RecurringEditDeleteTaskList';

const ManageTasksScreen = () => {
  return (
    <ScrollView>
      <Button
        onPress={() => {
          Actions.taskCreateScreen();
        }}
      >
        New Task
      </Button>
      <EditDeleteTaskList />
      <Button
        onPress={() => {
          Actions.recurringTaskCreateScreen();
        }}
      >
        New Recurring Task Series
      </Button>
      <RecurringEditDeleteTaskList />
    </ScrollView>
  );
};

export default ManageTasksScreen;

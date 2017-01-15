/*jshint esversion: 6 */
import React from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Button } from './common';
import EditDeleteTaskList from './EditDeleteTaskList';
import RecurringEditDeleteTaskList from './RecurringEditDeleteTaskList';

const ManageTasksScreen = () => {
  return (
    <ScrollView>
    <CardSection>
      <Button
        onPress={() => {
          Actions.taskCreateScreen();
        }}
      >
        New Task
      </Button>
    </CardSection>
      <EditDeleteTaskList />
    <CardSection>
      <Button
        onPress={() => {
          Actions.recurringTaskCreateScreen();
        }}
      >
        New Recurring Task Series
      </Button>
    </CardSection>
      <RecurringEditDeleteTaskList />
    </ScrollView>
  );
};

export default ManageTasksScreen;

/*jshint esversion: 6 */
import React from 'react';
import { View, ScrollView } from 'react-native';
import AppHeader from './AppHeader';
import TaskList from './TaskList';
import RecurringTaskList from './RecurringTaskList';

const MainScreen = () => {
  return (
    <View>
      <AppHeader />
        <ScrollView>
          <TaskList />
          <RecurringTaskList />
        </ScrollView>
    </View>
  );
};

export default MainScreen;

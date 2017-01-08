/*jshint esversion: 6 */
import React from 'react';
import { View } from 'react-native';
import AppHeader from './AppHeader';
import TaskList from './TaskList';

const MainScreen = () => {
  return (
    <View>
      <AppHeader />
      <TaskList />
    </View>
  );
};

export default MainScreen;

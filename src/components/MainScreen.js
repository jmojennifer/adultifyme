/*jshint esversion: 6 */
import React from 'react';
import { View, ScrollView } from 'react-native';
import AppHeader from './AppHeader';
import EditDeleteTaskList from './EditDeleteTaskList';
import RecurringEditDeleteTaskList from './RecurringEditDeleteTaskList';
import { Card } from './common';

const MainScreen = () => {
  return (
    <View>
      <AppHeader />
        <ScrollView>
          <Card>
            <EditDeleteTaskList />
            <RecurringEditDeleteTaskList />
          </Card>
        </ScrollView>
    </View>
  );
};

export default MainScreen;

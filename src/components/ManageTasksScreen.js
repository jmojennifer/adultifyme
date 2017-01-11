/*jshint esversion: 6 */
import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import EditDeleteTaskList from './EditDeleteTaskList';

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
      </View>
      <View>
        <EditDeleteTaskList />
      </View>
    </View>
  );
};

export default ManageTasksScreen;

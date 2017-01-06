/*jshint esversion: 6 */
import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

const MainScreen = () => {
  return (
    <View>
      <View>
        <Text>Manage Tasks</Text>
      </View>
      <View>
        <Button onPress={() => {
          Actions.newTaskScreen();
        }}
        >
        New Task
        </Button>
      </View>
    </View>
  );
};

export default MainScreen;

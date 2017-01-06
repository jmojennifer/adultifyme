/*jshint esversion: 6 */
import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

const LauncherScreen = () => {
  return (
    <View>
    <View>
      <Text>Adultify Me</Text>
    </View>
      <Button
        onPress={() => {
          Actions.initialDialogue();
        }}
      >
      Next
     </Button>
    </View>
  );
};

export default LauncherScreen;

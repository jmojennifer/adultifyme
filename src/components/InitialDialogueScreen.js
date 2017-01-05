/*jshint esversion: 6 */
import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

const InitialDialogueScreen = () => {
  return (
    <View>
    <View>
      <Text>Hi!</Text>
      <Text>Adulting is hard. I get it.</Text>
      <Text>{'Let\'s try to make it a bit easier'}</Text>
    </View>
    <Button
      onPress={() => {
        Actions.main();
      }}
    >
    Next
    </Button>
    </View>
  );
};

export default InitialDialogueScreen;

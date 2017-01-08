/*jshint esversion: 6 */
import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

const InitialDialogueScreen = () => {
  return (
    <View>
      <View style={styles.spacingStyle}>
        <Text style={styles.textStyle}>
          Hi!
        </Text>
        <Text style={styles.textStyle}>
          Adulting is hard. I get it.
        </Text>
        <Text style={styles.textStyle}>
          {'Let\'s try to make it a bit easier'}
        </Text>
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

const styles = {
  spacingStyle: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textStyle: {
    justifyContent: 'flex-start',
    fontSize: 18
  }
};

export default InitialDialogueScreen;

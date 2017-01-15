/*jshint esversion: 6 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Button } from './common';

class InitialDialogueScreen extends Component {

  onButtonPress() {
    Actions.main();
  }

  render() {
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
          <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Next
          </Button>
          </CardSection>
      </View>
    );
  }
}

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

/*jshint esversion: 6 */
import React from 'react';
import { Text, View, Linking } from 'react-native';

const AppAboutScreen = () => {
  return (
    <View style={styles.containerStyle}>
        <Text
          style={styles.textStyle}
        >
          Task icons provided by icon8
        </Text>
        <Text
          style={styles.linkStyle}
          onPress={() => Linking.openURL('https://icons8.com/web-app/7942/Edit')}
        >
          Edit icon
        </Text>
        <Text
          style={styles.linkStyle}
          onPress={() => Linking.openURL('https://icons8.com/web-app/5571/Delete')}
        >
          Delete icon
        </Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    alignItems: 'center'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5
  },
  linkStyle: {
    color: '#22333B',
    fontWeight: 'bold',
    fontSize: 18
  }
};

export default AppAboutScreen;

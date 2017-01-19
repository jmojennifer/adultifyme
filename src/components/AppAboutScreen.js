/*jshint esversion: 6 */
import React from 'react';
import { Text, View, Linking } from 'react-native';

const AppAboutScreen = () => {
  return (
    <View style={{ alignItems: 'center' }}>
        <Text>
          Icons provided by icon8
        </Text>
        <Text
          style={{ color: 'blue' }}
          onPress={() => Linking.openURL('https://icons8.com/web-app/7942/Edit')}
        >
          Edit icon
        </Text>
        <Text
          style={{ color: 'blue' }}
          onPress={() => Linking.openURL('https://icons8.com/web-app/5571/Delete')}
        >
          Delete icon
        </Text>
    </View>
  );
};

export default AppAboutScreen;

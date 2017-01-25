import React from 'react';
import { Text, View, Linking } from 'react-native';

const AppAboutScreen = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.headerStyle}>
        App
      </Text>
      <Text
        style={styles.textStyle}
      >
        Created as Jennifer Owens’ Ada Developers Academy solo capstone project, this app is the culmination of 5 months of classroom instruction and 1 month of development time. It is intended to showcase skills learned via self-study, use of new languages and concepts, and follow-through by completing an independently planned product using sound project management principles.
      </Text>
      <Text
        style={styles.linkStyle}
        onPress={() => Linking.openURL('http://adadevelopersacademy.org/')}
      >
          Ada Developers Academy website
      </Text>
      <Text
        style={styles.linkStyle}
        onPress={() => Linking.openURL('https://github.com/jmojennifer/adultifyme')}
      >
        Github repo
      </Text>
      <View style={styles.containerStyle}>
        <Text
          style={styles.headerStyle}
        >
          Credits
        </Text>
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
    </View>
  );
};

const styles = {
  containerStyle: {
    alignItems: 'center',

  },
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30
  },
  linkStyle: {
    color: '#22333B',
    fontWeight: 'bold',
    textAlign: 'justify',
    fontSize: 15,
    paddingBottom: 10
  }
};

export default AppAboutScreen;

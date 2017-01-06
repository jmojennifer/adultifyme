/*jshint esversion: 6 */
import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import Logo from './Logo';
import Star from './Star';
import DrawerMenu from './DrawerMenu';

const AppHeader = () => {
  return (
    <View>
    <View style={styles.row1AppHeaderStyle}>
      <View>
        <Logo />
      </View>
      <View>
        <Star />
      </View>
      <View>
        <DrawerMenu />
      </View>
    </View>
    <View style={styles.row2AppHeaderStyle}>
      <View>
        <Text style={{ fontSize: 20 }}>Tasks</Text>
      </View>
      <View>
        <Button
        onPress={() => {
          Actions.manageTasksScreen();
        }}
        >
        Manage Tasks
        </Button>
      </View>
    </View>
    </View>
  );
};

const styles = {
  row1AppHeaderStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginRight: 10
  },
  row2AppHeaderStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 50,
    marginLeft: 10
  },
  starMenuStyle: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginLeft: 10,
    marginRight: 10
  }
};

export default AppHeader;

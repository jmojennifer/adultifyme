/*jshint esversion: 6 */
import React, { Component } from 'react';
import { DeviceEventEmitter, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PushNotification from 'react-native-push-notification';
import PushNotificationAndroid from 'react-native-push-notification';
import firebase from 'firebase';
import LoginForm from './LoginForm';
import { starIncrease } from '../actions';

class LauncherScreen extends Component {
  componentWillMount() {
    const appSelf = this;

    PushNotification.configure({
        // (required) Called when a remote or local notification is opened or received
        onNotification: (notification) => {
          console.log('NOTIFICATION:', notification);
        }
    });

    (function () {
      PushNotificationAndroid.registerNotificationActions(
        ['Cancel Task', 'Completed Task', 'Cancel Occurance', 'Completed Occurance']
      );
      DeviceEventEmitter.addListener('notificationActionReceived', (action) => {
        console.log('Notification action received: ', action);
        const info = JSON.parse(action.dataJSON);
        const { currentUser } = firebase.auth();
        const userTasks = firebase.database().ref(`/users/${currentUser.uid}/tasks`);

        if (info.action === 'Cancel Task') {
          let task = null;
          const taskQuery = userTasks.orderByChild('reminderID').equalTo(info.id);
          taskQuery.on('child_added', snapshot => {
            task = snapshot;
          });
          firebase.database().ref(`/users/${currentUser.uid}/tasks/${task.key}`)
          .remove();
        } else if (info.action === 'Completed Task') {
          let task = null;
          const taskQuery = userTasks.orderByChild('reminderID').equalTo(info.id);
          taskQuery.on('child_added', snapshot => {
            task = snapshot;
          });
          firebase.database().ref(`/users/${currentUser.uid}/tasks/${task.key}`)
          .remove();
          appSelf.props.starIncrease();
        } else if (info.action === 'Cancel Occurance') {
          console.log('Nothing done');
        } else if (info.action === 'Completed Occurance') {
          appSelf.props.starIncrease();
        }
      });
    })();
  }

  render() {
    return (
      <View style={styles.initialDialogueCardSection}>
        <View>
          <Text style={styles.textStyle}>Login</Text>
        </View>
        <LoginForm />
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  initialDialogueCardSection: {
    backgroundColor: '#D5C2AD',
    borderColor: '#D5C2AD'
  }
};

export default connect(null, { starIncrease })(LauncherScreen);

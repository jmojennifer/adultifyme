/*jshint esversion: 6 */
import React, { Component } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import PushNotification from 'react-native-push-notification';
import PushNotificationAndroid from 'react-native-push-notification';
import RouterComponent from './Router';
import reducers from './reducers';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBrPSS9NBfLiIOQllwE3QV7rJh411_G8s4',
      authDomain: 'adultifyme.firebaseapp.com',
      databaseURL: 'https://adultifyme.firebaseio.com',
      storageBucket: 'adultifyme.appspot.com',
      messagingSenderId: '355708001571'
    };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(config);
    }

    PushNotification.configure({
        // (required) Called when a remote or local notification is opened or received
        onNotification: (notification) => {
          console.log('NOTIFICATION:', notification);
        }
    });

    (function () {
      PushNotificationAndroid.registerNotificationActions(
        ['Cancel Task', 'Completed Task', 'Cancel Task Occurance', 'Completed Task Occurance']
      );
      DeviceEventEmitter.addListener('notificationActionReceived', (action) => {
        console.log('Notification action received: ', action);
        const info = JSON.parse(action.dataJSON);
        const { currentUser } = firebase.auth();
        const userTasks = firebase.database().ref(`/users/${currentUser.uid}/tasks`);
        const userRecurringTasks = firebase.database().ref(
          `/users/${currentUser.uid}/recurringTasks`
        );

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
          task.on('value', snapshot => { console.log(snapshot.val()); });
        } else if (info.action === 'Cancel Task Occurance') {
          console.log(info.id);
        } else if (info.action === 'Completed Task Occurance') {
          console.log(info.id);
        }
      });
    })();
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

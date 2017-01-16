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
      PushNotificationAndroid.registerNotificationActions(['Cancel', 'Completed']);
      DeviceEventEmitter.addListener('notificationActionReceived', (action) => {
        console.log('Notification action received: ', action);
        const info = JSON.parse(action.dataJSON);
        if (info.action === 'Cancel' && action.tag === 'one-off') {
          const { currentUser } = firebase.auth();
    
          firebase.database().ref(`/users/${currentUser.uid}/recurringTasks/${uid}`

        } else if (info.action === 'Accept' && action.tag === 'one-off') {

        } else if (info.action === 'Cancel' && action.tag === 'recurring') {

        } else if (info.action === 'Accept' && action.tag === 'recurring') {

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

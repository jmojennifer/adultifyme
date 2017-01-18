/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import RouterComponent from './Router';
import store from './store';

class App extends Component {
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
  }

  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;

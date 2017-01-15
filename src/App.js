/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';


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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

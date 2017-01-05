/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './Router';
import reducers from './reducers';

class App extends Component {
  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

/*jshint esversion: 6 */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LauncherScreen from './components/LauncherScreen.js';
import InitialDialogueScreen from './components/InitialDialogueScreen.js';
import MainScreen from './components/MainScreen.js';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="launcherScreen" component={LauncherScreen} title="Welcome!" initial />
      <Scene key="initialDialogueScreen" component={InitialDialogueScreen} title="Welcome!" />
      <Scene key="mainScreen" component={MainScreen} title="Adultify Me" />
    </Router>
  );
};

export default RouterComponent;

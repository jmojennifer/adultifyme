/*jshint esversion: 6 */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Launcher from '../components/Launcher.js';
import InitialDialogue from '../components/InitialDialogue.js';
import Main from '../components/Main.js';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="launcher" component={Launcher} title="Welcome!" initial />
      <Scene key="initialDialogue" component={InitialDialogue} title="Welcome!"/>
      <Scene key="main" component={Main} title="Adultify Me"/>
    </Router>
  );
};

export default RouterComponent;

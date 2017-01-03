/*jshint esversion: 6 */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Launcher from '../components/launcher.js';
import InitialDialogue from '../components/initialdialogue.js';
import MainHome from '../components/mainhome.js';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="launcher" component={Launcher} title="Welcome!" initial />
      <Scene key="initialDialogue" component={InitialDialogue} title="Welcome!"/>
      <Scene key="mainHome" component={MainHome} title="Adultify Me"/>
    </Router>
  );
};

export default RouterComponent;

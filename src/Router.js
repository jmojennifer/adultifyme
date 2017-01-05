/*jshint esversion: 6 */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LauncherScreen from './components/LauncherScreen.js';
import InitialDialogueScreen from './components/InitialDialogueScreen.js';
import MainScreen from './components/MainScreen.js';
import ManageTasksScreen from './components/ManageTasksScreen';
import NewTaskScreen from './components/NewTaskScreen';
import AccountInfoScreen from './components/AccountInfoScreen.js';
import AppSettingsScreen from './components/AppSettingsScreen.js';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="welcomeFlow">
        <Scene key="launcherScreen" component={LauncherScreen} title="Welcome!" />

        <Scene key="initialDialogueScreen" component={InitialDialogueScreen} title="Welcome!" />
      </Scene>
      <Scene key="main">
        <Scene
        key="mainScreen" component={MainScreen} title="Adultify Me"
        initial
        />
      </Scene>

      <Scene key="manageTasksScreen" component={ManageTasksScreen} title="Manage Tasks" />

      <Scene key="newTaskScreen" component={NewTaskScreen} title="New Task" />

      <Scene key="accountInfoScreen" component={AccountInfoScreen} title="Account Info" />

      <Scene key="appSettingsScreen" component={AppSettingsScreen} title="App Settings" />
    </Router>
  );
};

export default RouterComponent;

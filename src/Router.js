/*jshint esversion: 6 */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LauncherScreen from './components/LauncherScreen.js';
import InitialDialogueScreen from './components/InitialDialogueScreen.js';
import MainScreen from './components/MainScreen.js';
import ManageTasksScreen from './components/ManageTasksScreen';
import TaskCreateScreen from './components/TaskCreateScreen';
import TaskEditDeleteScreen from './components/TaskEditDeleteScreen';
import AccountInfoScreen from './components/AccountInfoScreen.js';
import AppSettingsScreen from './components/AppSettingsScreen.js';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="launcherScreen" component={LauncherScreen} title="Welcome!" initial />
      </Scene>
      <Scene key="initialDialogue">
        <Scene key="initialDialogueScreen" component={InitialDialogueScreen} title="Welcome!" />
      </Scene>
      <Scene key="main">
        <Scene
        key="mainScreen" component={MainScreen} title="Adultify Me"
        />
      </Scene>

      <Scene key="manageTasksScreen" component={ManageTasksScreen} title="Manage Tasks" />

      <Scene key="taskCreateScreen" component={TaskCreateScreen} title="New Task" />

      <Scene key="taskEditDeleteScreen" component={TaskEditDeleteScreen} title="Edit Task" />

      <Scene key="accountInfoScreen" component={AccountInfoScreen} title="Account Info" />

      <Scene key="appSettingsScreen" component={AppSettingsScreen} title="App Settings" />
    </Router>
  );
};

export default RouterComponent;

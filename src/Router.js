/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LauncherScreen from './components/LauncherScreen.js';
import InitialDialogueScreen from './components/InitialDialogueScreen.js';
import MainScreen from './components/MainScreen.js';
import TaskCreateScreen from './components/TaskCreateScreen';
import TaskEditScreen from './components/TaskEditScreen';
import RecurringTaskCreateScreen from './components/RecurringTaskCreateScreen';
import RecurringTaskEditScreen from './components/RecurringTaskEditScreen';
import AccountInfoScreen from './components/AccountInfoScreen.js';
import AppSettingsScreen from './components/AppSettingsScreen.js';
import { logoutUser } from './actions';

class RouterComponent extends Component {

  onLogoutPress() {
    this.props.logoutUser();
  }

  render() {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene
          key="auth"
          type={ActionConst.RESET}
        >
          <Scene
            key="launcherScreen"
            component={LauncherScreen}
            title="Welcome!"
            type={ActionConst.RESET}
            initial
          />
        </Scene>
        <Scene key="initialDialogue">
          <Scene key="initialDialogueScreen" component={InitialDialogueScreen} title="Welcome!" />
        </Scene>
        <Scene key="main">
          <Scene
            key="mainScreen"
            component={MainScreen}
            title="Adultify Me"
            leftTitle="Logout"
            onLeft={this.onLogoutPress.bind(this)}
          />
          <Scene
            key="taskCreateScreen"
            component={TaskCreateScreen}
            title="New Task"
          />
          <Scene
            key="taskEditScreen"
            component={TaskEditScreen}
            title="Edit Task"
          />
          <Scene
            key="recurringTaskCreateScreen" component={RecurringTaskCreateScreen}
            title="New Recurring Task Series"
          />
          <Scene
            key="recurringTaskEditScreen"
            component={RecurringTaskEditScreen}
            title="Edit Recurring Task Series"
          />
        </Scene>

        <Scene key="accountInfoScreen" component={AccountInfoScreen} title="Account Info" />

        <Scene key="appSettingsScreen" component={AppSettingsScreen} title="App Settings" />
      </Router>
    );
  }
}

export default connect(null, { logoutUser })(RouterComponent);

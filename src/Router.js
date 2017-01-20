/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LauncherScreen from './components/LauncherScreen.js';
import InitialDialogueScreen from './components/InitialDialogueScreen.js';
import MainScreen from './components/MainScreen.js';
import TaskCreateScreen from './components/TaskCreateScreen';
import TaskEditScreen from './components/TaskEditScreen';
import RecurringTaskCreateScreen from './components/RecurringTaskCreateScreen';
import RecurringTaskEditScreen from './components/RecurringTaskEditScreen';
import AccountInfoScreen from './components/AccountInfoScreen.js';
import AppAboutScreen from './components/AppAboutScreen.js';
import { logoutUser } from './actions';

class RouterComponent extends Component {

  onLogoutPress() {
    this.props.logoutUser();
  }

  onAboutPress() {
    Actions.appAboutScreen();
  }

  render() {
    return (
      <Router sceneStyle={{ paddingTop: 65, backgroundColor: '#D5C2AD' }}>
        <Scene
          key="auth"
          type={ActionConst.RESET}
        >
          <Scene
            key="launcherScreen"
            component={LauncherScreen}
            title="Adultify Me"
            type={ActionConst.RESET}
            initial
          />
        </Scene>
        <Scene key="initialDialogue">
          <Scene
            key="initialDialogueScreen"
            component={InitialDialogueScreen}
            title="Adultify Me"
          />
        </Scene>
        <Scene key="main">
          <Scene
            key="mainScreen"
            component={MainScreen}
            title="Adultify Me"
            leftTitle="Logout"
            onLeft={this.onLogoutPress.bind(this)}
            leftButtonTextStyle={{ color: '#5E503F' }}
            rightTitle="About"
            onRight={this.onAboutPress.bind(this)}
            rightButtonTextStyle={{ color: '#5E503F' }}
          />
          <Scene
            key="taskCreateScreen"
            component={TaskCreateScreen}
            title="New Task"
            backButtonImage={require('./images/back_button.png')}
          />
          <Scene
            key="taskEditScreen"
            component={TaskEditScreen}
            title="Edit Task"
            backButtonImage={require('./images/back_button.png')}
          />
          <Scene
            key="recurringTaskCreateScreen" component={RecurringTaskCreateScreen}
            title="New Recurring Task Series"
            backButtonImage={require('./images/back_button.png')}
          />
          <Scene
            key="recurringTaskEditScreen"
            component={RecurringTaskEditScreen}
            title="Edit Recurring Task Series"
            backButtonImage={require('./images/back_button.png')}
          />
          <Scene
            key="appAboutScreen"
            component={AppAboutScreen}
            title="About"
            backButtonImage={require('./images/back_button.png')}
          />
        </Scene>

        <Scene key="accountInfoScreen" component={AccountInfoScreen} title="Account Info" />
      </Router>
    );
  }
}

export default connect(null, { logoutUser })(RouterComponent);

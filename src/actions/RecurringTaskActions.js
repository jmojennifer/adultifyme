import firebase from 'firebase';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import {
  RECURRING_FORM_UPDATE,
  RECURRING_TASK_CREATE,
  RECURRING_TASKS_FETCH_SUCCESS,
  RECURRING_TASK_SAVE_SUCCESS
} from './types';

require('moment-recur');

export const recurringFormUpdate = ({ prop, value }) => {
  return {
    type: RECURRING_FORM_UPDATE,
    payload: { prop, value }
  };
};

export const recurringTaskCreate = ({
  title,
  description,
  personalMotivation,
  category,
  frequency,
  startDate,
  endDate,
  recurringTime,
  reminderID
}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/recurringTasks`)
      .push({
        title,
        description,
        personalMotivation,
        category,
        frequency,
        startDate,
        endDate,
        recurringTime,
        reminderID
      })
      .then(() => {
        dispatch({ type: RECURRING_TASK_CREATE });
        Actions.main({ type: 'reset' });
      });
  };
};

export const recurringTasksFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/recurringTasks`)
      .on('value', snapshot => {
        dispatch({ type: RECURRING_TASKS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const recurringTaskSave = ({
  title,
  description,
  personalMotivation,
  category,
  frequency,
  startDate,
  endDate,
  recurringTime,
  reminderID,
  uid
}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/recurringTasks/${uid}`)
      .set({
        title,
        description,
        personalMotivation,
        category,
        frequency,
        startDate,
        endDate,
        recurringTime,
        reminderID
      })
      .then(() => {
        dispatch({ type: RECURRING_TASK_SAVE_SUCCESS });
        Actions.manageTasksScreen({ type: 'reset' });
      });
  };
};

export const recurringTaskDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/recurringTasks/${uid}`)
      .remove()
      .then(() => {
        Actions.manageTasksScreen({ type: 'reset' });
      });
  };
};

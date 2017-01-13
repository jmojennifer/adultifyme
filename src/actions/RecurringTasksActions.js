import firebase from 'firebase';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import {
  RECURRING_FORM_UPDATE,
  RECURRING_TASKS_CREATE,
  RECURRING_TASKS_FETCH_SUCCESS,
  RECURRING_TASKS_SAVE_SUCCESS
} from './types';

require('moment-recur');

export const recurringFormUpdate = ({ prop, value }) => {
  return {
    type: RECURRING_FORM_UPDATE,
    payload: { prop, value }
  };
};

export const recurringTasksCreate = ({
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
    firebase.database().ref(`/users/${currentUser.uid}/tasks`)
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
        dispatch({ type: RECURRING_TASKS_CREATE });
        Actions.main({ type: 'reset' });
      });
  };
};

export const recurringTasksFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks`)
      .on('value', snapshot => {
        dispatch({ type: RECURRING_TASKS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const recurringTasksSave = ({
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
    firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
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
        dispatch({ type: RECURRING_TASKS_SAVE_SUCCESS });
        Actions.manageTasksScreen({ type: 'reset' });
      });
  };
};

export const recurringTasksDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
      .remove()
      .then(() => {
        Actions.manageTasksScreen({ type: 'reset' });
      });
  };
};

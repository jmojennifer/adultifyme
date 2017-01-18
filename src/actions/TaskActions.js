import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CREATE_FORM_STATE_RESET,
  FORM_UPDATE,
  TASK_CREATE,
  TASKS_FETCH_SUCCESS,
  TASK_SAVE_SUCCESS
} from './types';

export const createFormStateReset = () => {
  return (dispatch) => {
    dispatch({ type: CREATE_FORM_STATE_RESET });
  };
};

export const formUpdate = ({ prop, value }) => {
  return {
    type: FORM_UPDATE,
    payload: { prop, value }
  };
};

export const taskCreate = ({
  title,
  description,
  personalMotivation,
  category,
  dueDate,
  timeDue,
  reminderID
}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks`)
      .push({
        title, description, personalMotivation, category, dueDate, timeDue, reminderID
      })
      .then(() => {
        dispatch({ type: TASK_CREATE });
        Actions.mainScreen({ type: 'reset' });
      });
  };
};

export const tasksFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks`)
      .on('value', snapshot => {
        dispatch({ type: TASKS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const taskSave = ({
  title,
  description,
  personalMotivation,
  category,
  dueDate,
  timeDue,
  reminderID,
  uid
}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
      .set({ title, description, personalMotivation, category, dueDate, timeDue, reminderID })
      .then(() => {
        dispatch({ type: TASK_SAVE_SUCCESS });
        Actions.mainScreen({ type: 'reset' });
      });
  };
};

export const taskDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
      .remove()
      .then(() => {
        Actions.mainScreen({ type: 'reset' });
      });
  };
};

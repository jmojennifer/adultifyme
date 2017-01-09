import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  TASK_UPDATE,
  TASK_CREATE,
  TASKS_FETCH_SUCCESS,
  TASK_SAVE_SUCCESS
} from './types';

export const taskUpdate = ({ prop, value }) => {
  return {
    type: TASK_UPDATE,
    payload: { prop, value }
  };
};

export const taskCreate = ({
  title,
  description,
  personalMotivation,
  category,
  dueDate,
  timeDue
}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks`)
      .push({ title, description, personalMotivation, category, dueDate, timeDue })
      .then(() => {
        dispatch({ type: TASK_CREATE });
        Actions.main({ type: 'reset' });
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
  uid
}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
      .set({ title, description, personalMotivation, category, dueDate, timeDue })
      .then(() => {
        dispatch({ type: TASK_SAVE_SUCCESS });
        Actions.manageTasksScreen({ type: 'reset' });
      });
  };
};

export const taskDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
      .remove()
      .then(() => {
        Actions.manageTasksScreen({ type: 'reset' });
      });
  };
};

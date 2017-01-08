import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { TASK_UPDATE, TASK_CREATE } from './types';

export const taskUpdate = ({ prop, value }) => {
  return {
    type: TASK_UPDATE,
    payload: { prop, value }
  };
};

export const taskCreate = ({
  title,
  description,
  personal_motivation,
  category,
  due_date,
  time_due
}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks`)
      .push({ title, description, personal_motivation, category, due_date, time_due })
      .then(() => {
        dispatch({ type: TASK_CREATE });
        Actions.main({ type: 'reset' });
      });
  };
};

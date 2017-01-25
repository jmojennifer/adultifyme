import firebase from 'firebase';
import { STAR_COUNT_FETCH_SUCCESS } from './types';

export const starCountFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}`)
      .on('child_added', snapshot => {
        dispatch({ type: STAR_COUNT_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

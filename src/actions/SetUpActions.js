import firebase from 'firebase';
import { INITIAL_STAR_COUNT_SET_UP } from './types';

export const starCountCreate = () => {
  return (dispatch) => {
    const userRef = firebase.database().ref(
      'users/' + firebase.auth().currentUser.uid + '/userProperties'
    );
    userRef.on('value', snapshot => {
      if (snapshot.val() === null) {
        userRef.set({ starCount: 0 });
      }
    });
    dispatch({ type: INITIAL_STAR_COUNT_SET_UP });
  };
};

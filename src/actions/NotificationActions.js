import firebase from 'firebase';
import {
  STAR_COUNT_INCREASE,
  STAR_COUNT_FETCH_SUCCESS
} from './types';

export const starCountIncrease = () => {
  const { currentUser } = firebase.auth();
  const userRef = firebase.database().ref(`/users/${currentUser.uid}/userProperties`);
  let star;
  userRef.on('child_added', snapshot => {
    star = snapshot;
    console.log(snapshot.val());
  });
  return (dispatch) => {
     star = star.val() + 1;
    firebase.database().ref(`/users/${currentUser.uid}/userProperties`).set(
        { starCount: star }
      )
      .then(() => {
        console.log('in starCountIncrease');
        dispatch({ type: STAR_COUNT_INCREASE });
      });
  };
};

export const starCountFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}`)
      .on('child_added', snapshot => {
        dispatch({ type: STAR_COUNT_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

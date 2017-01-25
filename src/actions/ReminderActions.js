import firebase from 'firebase';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import PushNotification from 'react-native-push-notification';
import {
  REMINDER_CREATE,
  REMINDER_SAVE,
  REMINDER_DELETE
} from './types';

export const reminderCreate = ({
  title,
  description,
  personalMotivation,
  category,
  dueDate,
  timeDue,
  reminderID

}) => {
  return (dispatch) => {
    const messageContent =
    `💬 ${personalMotivation}

    Description:
    ${description}

    Category:
    ${category}`;
    const dueDateTime = `${dueDate} ${timeDue}`;
    const nowMS = moment().valueOf();
    const deadlineMS = moment(
      dueDateTime, 'MM-DD-YYYY hh:mm:ssa'
    ).valueOf();
    const deadline = deadlineMS - nowMS;

    const loggedInUserID = firebase.auth().currentUser.uid;

    PushNotification.localNotificationSchedule({
      id: reminderID,
      title: title,
      message: '',
      bigText: messageContent,
      group: loggedInUserID,
      largeIcon: 'ic_launcher',
      date: new Date(Date.now() + deadline),
      actions: '["Cancel Task", "Completed Task"]'
    });
    dispatch({ type: REMINDER_CREATE });
    Actions.mainScreen({ type: 'reset' });
  };
};

export const reminderSave = ({
  title,
  description,
  personalMotivation,
  category,
  dueDate,
  timeDue,
  reminderID

}) => {
  return (dispatch) => {
    const messageContent =
    `💬 ${personalMotivation}

    Description:
    ${description}

    Category:
    ${category}`;
    const dueDateTime = `${dueDate} ${timeDue}`;
    const nowMS = moment().valueOf();
    const deadlineMS = moment(
      dueDateTime, 'MM-DD-YYYY hh:mm:ssa'
    ).valueOf();
    const deadline = deadlineMS - nowMS;

    const loggedInUserID = firebase.auth().currentUser.uid;

    PushNotification.localNotificationSchedule({
      id: reminderID,
      title: title,
      message: '',
      bigText: messageContent,
      group: loggedInUserID,
      largeIcon: 'ic_launcher',
      date: new Date(Date.now() + deadline),
      actions: '["Cancel Task", "Completed Task"]'
    });
    dispatch({ type: REMINDER_SAVE });
    Actions.mainScreen({ type: 'reset' });
  };
};

export const reminderDelete = ({ reminderID }) => {
  return (dispatch) => {
    PushNotification.cancelLocalNotifications({ id: reminderID });
    dispatch({ type: REMINDER_DELETE });
    Actions.mainScreen({ type: 'reset' });
  };
};

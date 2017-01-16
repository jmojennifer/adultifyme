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
    const messageContent = `Personal Motivation: ${personalMotivation}
    Description: ${description}
    Category: ${category}`;
    const dueDateTime = `${dueDate} ${timeDue}`;
    const nowMS = moment().valueOf();
    const deadlineMS = moment(
      dueDateTime, 'MM-DD-YYYY hh:mm:ssa'
    ).valueOf();
    const deadline = deadlineMS - nowMS;
    console.log(`nowMS: ${nowMS}`);
    console.log(`deadlineMS: ${deadlineMS}`);
    console.log(`Deadline: ${deadline}`);

    PushNotification.localNotificationSchedule({
      id: reminderID,
      title: title,
      message: messageContent,
      date: new Date(Date.now() + deadline)
    });
    console.log(`reminderID: ${reminderID}`);
    console.log(`reminderID type: ${typeof reminderID}`);
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
    const messageContent = `Personal Motivation: ${personalMotivation}
    Description: ${description}
    Category: ${category}`;
    const dueDateTime = `${dueDate} ${timeDue}`;
    const nowMS = moment().valueOf();
    const deadlineMS = moment(
      dueDateTime, 'MM-DD-YYYY hh:mm:ssa'
    ).valueOf();
    const deadline = deadlineMS - nowMS;
    console.log(`nowMS: ${nowMS}`);
    console.log(`deadlineMS: ${deadlineMS}`);
    console.log(`Deadline: ${deadline}`);

    PushNotification.localNotificationSchedule({
      id: reminderID,
      title: title,
      message: messageContent,
      date: new Date(Date.now() + deadline)
    });
    console.log(`reminderID: ${reminderID}`);
    console.log(`reminderID type: ${typeof reminderID}`);
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

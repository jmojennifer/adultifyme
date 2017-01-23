import PushNotification from 'react-native-push-notification';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import {
  RECURRING_REMINDER_CREATE,
  RECURRING_REMINDER_SAVE,
  RECURRING_REMINDER_DELETE
} from './types';

export const recurringReminderCreate = ({
  title,
  description,
  personalMotivation,
  category,
  frequency,
  startDate,
  recurringTime,
  reminderID

}) => {
  return (dispatch) => {
    const messageContent =
    `💬 ${personalMotivation}

    Description:
    ${description}

    Category:
    ${category}`;
    const startDateRecurringTime = `${startDate} ${recurringTime}`;
    const nowMS = moment().valueOf();
    const startDateMS = moment(
      startDateRecurringTime, 'MM-DD-YYYY hh:mm:ssa'
    ).valueOf();
    const adjustedStartDate = startDateMS - nowMS;

    PushNotification.localNotificationSchedule({
      id: reminderID,
      title: title,
      message: '',
      bigText: messageContent,
      largeIcon: 'ic_launcher',
      date: new Date(Date.now() + adjustedStartDate),
      repeatType: frequency,
      actions: '["Cancel Occurence", "Completed Occurence"]'
    });
    dispatch({ type: RECURRING_REMINDER_CREATE });
    Actions.mainScreen({ type: 'reset' });
  };
};

export const recurringReminderSave = ({
  title,
  description,
  personalMotivation,
  category,
  frequency,
  startDate,
  recurringTime,
  reminderID

}) => {
  return (dispatch) => {
    const messageContent =
    `💬 ${personalMotivation}

    Description:
    ${description}

    Category:
    ${category}`;
    const startDateRecurringTime = `${startDate} ${recurringTime}`;
    const nowMS = moment().valueOf();
    const startDateMS = moment(
      startDateRecurringTime, 'MM-DD-YYYY hh:mm:ssa'
    ).valueOf();
    const adjustedStartDate = startDateMS - nowMS;

    PushNotification.localNotificationSchedule({
      id: reminderID,
      title: title,
      message: '',
      bigText: messageContent,
      largeIcon: 'ic_launcher',
      date: new Date(Date.now() + adjustedStartDate),
      repeatType: frequency,
      actions: '["Cancel Occurence", "Completed Occurence"]'
    });
    dispatch({ type: RECURRING_REMINDER_SAVE });
    Actions.mainScreen({ type: 'reset' });
  };
};

export const recurringReminderDelete = ({ reminderID }) => {
  return (dispatch) => {
    PushNotification.cancelLocalNotifications({ id: reminderID });
    dispatch({ type: RECURRING_REMINDER_DELETE });
    Actions.mainScreen({ type: 'reset' });
  };
};

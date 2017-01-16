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
  endDate,
  recurringTime,
  recurringTaskCreateOnReminderCreation

}) => {
  return (dispatch) => {
    const messageContent = `Personal Motivation: ${personalMotivation}
    Description: ${description}
    Category: ${category}`;
    const startDateRecurringTime = `${startDate} ${recurringTime}`;
    const momentDate = moment(startDateRecurringTime, 'MM-DD-YYYY hh:mm:ssa').format();

    if (endDate == '') {
      Notification.create({
        subject: title,
        bigText: messageContent,
        sendAt: momentDate,
        repeatEvery: frequency
      })
      .then((notification) => {
        recurringTaskCreateOnReminderCreation(notification.id);
        dispatch({ type: RECURRING_REMINDER_CREATE });
        Actions.mainScreen({ type: 'reset' });
      });
    } else if (endDate != '') {
      Notification.create({
        subject: title,
        bigText: messageContent,
        sendAt: momentDate,
        repeatEvery: frequency,
        endAt: endDate
      })
      .then((notification) => {
        recurringTaskCreateOnReminderCreation(notification.id);
        dispatch({ type: RECURRING_REMINDER_CREATE });
        Actions.mainScreen({ type: 'reset' });
      });
    }
  };
};

export const recurringReminderSave = ({
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
  return (dispatch) => {
    const messageContent = `Personal Motivation: ${personalMotivation}
    Description: ${description}
    Category: ${category}`;
    const startDateRecurringTime = `${startDate} ${recurringTime}`;
    const momentDate = moment(startDateRecurringTime, 'MM-DD-YYYY hh:mm:ssa').format();

    if (endDate == '') {
      Notification.create({
        id: reminderID,
        subject: title,
        bigText: messageContent,
        sendAt: momentDate,
        repeatEvery: frequency
      })
      .then(() => {
        dispatch({ type: RECURRING_REMINDER_SAVE });
        Actions.mainScreen({ type: 'reset' });
      });
    } else if (endDate != '') {
      Notification.create({
        id: reminderID,
        subject: title,
        bigText: messageContent,
        sendAt: momentDate,
        repeatEvery: frequency,
        endAt: endDate
      })
      .then(() => {
        dispatch({ type: RECURRING_REMINDER_SAVE });
        Actions.mainScreen({ type: 'reset' });
      });
    }
  };
};

export const recurringReminderDelete = ({ reminderID }) => {
  return (dispatch) => {
    //swallow any errors - we don't care if the reminder can't be
    //deleted... as long as it no longer exists
    Notification.delete(reminderID).then(
      (val) => {
        dispatch({ type: RECURRING_REMINDER_DELETE });
        Actions.mainScreen({ type: 'reset' });
      },
      (reason) => {
        dispatch({ type: RECURRING_REMINDER_DELETE });
        Actions.mainScreen({ type: 'reset' });
      }
    );
  };
};

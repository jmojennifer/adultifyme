import Notification from 'react-native-system-notification';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import {
  RECURRING_REMINDERS_CREATE,
  RECURRING_REMINDERS_SAVE,
  RECURRING_REMINDERS_DELETE
} from './types';

export const recurringRemindersCreate = ({
  title,
  description,
  personalMotivation,
  category,
  frequency,
  startDate,
  endDate,
  recurringTime,
  taskCreateOnReminderCreation

}) => {
  return (dispatch) => {
    const messageContent = `Personal Motication: ${personalMotivation}
    Description: ${description}
    Category: ${category}`;
    const dueDateTime = `${dueDate} ${timeDue}`;
    const deadline = moment(dueDateTime, 'MM-DD-YYYY hh:mm:ssa').format();
    Notification.create({
      subject: title,
      bigText: messageContent,
      sendAt: deadline
    })
    .then((notification) => {
      taskCreateOnReminderCreation(notification.id);
      dispatch({ type: RECURRING_REMINDERS_CREATE });
      Actions.main({ type: 'reset' });
    });
  };
};

export const recurringRemindersSave = ({
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
    const messageContent = `Personal Motication: ${personalMotivation}
    Description: ${description}
    Category: ${category}`;
    const dueDateTime = `${dueDate} ${timeDue}`;
    console.log(dueDateTime);
    const deadline = moment(dueDateTime, 'MM-DD-YYYY hh:mm:ssa').format();
    Notification.create({
      subject: title,
      bigText: messageContent,
      sendAt: deadline
    })
    .then(() => {
      dispatch({ type: RECURRING_REMINDERS_SAVE });
      Actions.manageTasksScreen({ type: 'reset' });
    });
  };
};

export const recurringRemindersDelete = ({ reminderID }) => {
  return (dispatch) => {
    //swallow any errors - we don't care if the reminder can't be
    //deleted... as long as it no longer exists
    Notification.delete(reminderID).then(
      (val) => {
        dispatch({ type: RECURRING_REMINDERS_DELETE });
        Actions.manageTasksScreen({ type: 'reset' });
      },
      (reason) => {
        dispatch({ type: RECURRING_REMINDERS_DELETE });
        Actions.manageTasksScreen({ type: 'reset' });
      }
    );
  };
};

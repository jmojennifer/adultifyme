import Notification from 'react-native-system-notification';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import { REMINDER_CREATE, REMINDER_SAVE, REMINDER_DELETE } from './types';

export const reminderCreate = ({
  title,
  description,
  personalMotivation,
  category,
  dueDateTime,
  taskCreateOnReminderCreation

}) => {
  return (dispatch) => {
    const messageContent = `Your motivation: ${personalMotivation}
    Description: ${description} Category: ${category}`;
    const deadline = moment(dueDateTime, 'MM-DD-YYYY hh:mm:ssa').format();
    console.log(deadline);
    Notification.create({
      subject: title,
      message: messageContent,
      sendAt: deadline
    })
    .then((notification) => {
      taskCreateOnReminderCreation(notification.id);
      dispatch({ type: REMINDER_CREATE });
      Actions.main({ type: 'reset' });
    });
  };
};

export const reminderSave = ({
  title,
  description,
  personalMotivation,
  category,
  dueDateTime,
  reminderID

}) => {
  return (dispatch) => {
    const messageContent = `Your motivation: ${personalMotivation}
    Description: ${description} Category: ${category}`;
    Notification.create({
      id: reminderID,
      subject: title,
      message: messageContent,
      sendAt: new Date(`${dueDateTime}`)
    })
    .then(() => {
      dispatch({ type: REMINDER_SAVE });
      Actions.manageTasksScreen({ type: 'reset' });
    });
  };
};

export const reminderDelete = ({ reminderID }) => {
  return (dispatch) => {
    //swallow any errors - we don't care if the reminder can't be
    //deleted... as long as it no longer exists
    Notification.delete(reminderID).then(
      (val) => {
        dispatch({ type: REMINDER_DELETE });
        Actions.manageTasksScreen({ type: 'reset' });
      },
      (reason) => {
        dispatch({ type: REMINDER_DELETE });
        Actions.manageTasksScreen({ type: 'reset' });
      }
    );
  };
};

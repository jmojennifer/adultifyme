import Notification from 'react-native-system-notification';
import { Actions } from 'react-native-router-flux';
import { REMINDER_CREATE, REMINDER_SAVE, REMINDER_DELETE } from './types';

export const reminderCreate = ({
  title,
  description,
  personalMotivation,
  category,
  dueDate,
  // timeDue,
  taskCreateOnReminderCreation

}) => {
  return (dispatch) => {
    const messageContent = `Your motivation: ${personalMotivation}
    Description: ${description} Category: ${category}`;
    Notification.create({
      subject: title,
      message: messageContent,
      sendAt: new Date(`${dueDate}`)
    })
    .then((notification) => {
      taskCreateOnReminderCreation(notification.id);

      dispatch({ type: REMINDER_CREATE });
      Actions.main();
    });
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
    Notification.delete(reminderID);
    const messageContent = `Your motivation: ${personalMotivation}
    Description: ${description} Category: ${category}`;
    Notification.create({
      id: reminderID,
      subject: title,
      message: messageContent,
      sendAt: new Date(`${dueDate}`)
    })
    .then(() => {
      dispatch({ type: REMINDER_SAVE });
      Actions.main();
    });
  };
};

export const reminderDelete = ({ reminderID }) => {
  return (dispatch) => {
    Notification.delete(reminderID)
    .then(() => {
      dispatch({ type: REMINDER_DELETE });
      Actions.manageTasksScreen({ type: 'reset' });
    });
  };
};

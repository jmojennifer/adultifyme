import Notification from 'react-native-system-notification';
import { Actions } from 'react-native-router-flux';
import { REMINDER_CREATE, REMINDER_SAVE } from './types';

export const reminderCreate = ({
  title,
  description,
  personalMotivation,
  category,
  dueDate,
  timeDue,
  onReminderCreation

}) => {
  return (dispatch) => {
    const messageContent = `${description} ${personalMotivation}`;
    Notification.create({
      subject: title,
      message: messageContent,
      sendAt: new Date(2017, 1, 10, 19, 0)
    })
    .then((notification) => {
      onReminderCreation(notification.id);

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
    Notification.clear(reminderID);
    const messageContent = `${description} ${personalMotivation}`;
    Notification.create({
      id: reminderID,
      subject: title,
      message: messageContent,
      sendAt: Date.now()
    })
    .then(() => {
      dispatch({ type: REMINDER_SAVE });
      Actions.main();
    });
  };
};

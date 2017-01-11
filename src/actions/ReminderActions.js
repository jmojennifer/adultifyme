import Notification from 'react-native-system-notification';
import { Actions } from 'react-native-router-flux';
import { REMINDER_CREATE } from './types';

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
      sendAt: new Date(2017, 0, 10, 18, 35)
    })
    .then((notification) => {
      onReminderCreation(notification.id);

      dispatch({ type: REMINDER_CREATE });
      Actions.main();
    });
  };
};

import Notification from 'react-native-system-notification';
import { Actions } from 'react-native-router-flux';
import { REMINDER_CREATE } from './types';

export const reminderCreate = ({
  title,
  description,
  personalMotivation,
  category,
  dueDate,
  timeDue
}) => {
  return (dispatch) => {
    const messageContent = `${description} ${personalMotivation}`;
    Notification.create({
      subject: title,
      message: messageContent,
      delay: 10000
    })
    .then(() => {
      dispatch({ type: REMINDER_CREATE });
      Actions.main();
    });
  };
};

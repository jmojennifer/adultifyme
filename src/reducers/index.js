import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TaskFormReducer from './TaskFormReducer';
import TaskReducer from './TaskReducer';
import ReminderReducer from './ReminderReducer';
import RecurringTaskFormReducer from './RecurringTaskFormReducer';
import RecurringTaskReducer from './RecurringTaskReducer';
import RecurringReminderReducer from './RecurringReminderReducer';

export default combineReducers({
  auth: AuthReducer,
  taskForm: TaskFormReducer,
  tasks: TaskReducer,
  reminders: ReminderReducer,
  recurringTaskForm: RecurringTaskFormReducer,
  recurringTasks: RecurringTaskReducer,
  recurringReminders: RecurringReminderReducer
});

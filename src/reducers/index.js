import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TaskFormReducer from './TaskFormReducer';
import TaskReducer from './TaskReducer';
import ReminderReducer from './ReminderReducer';

export default combineReducers({
  auth: AuthReducer,
  taskForm: TaskFormReducer,
  tasks: TaskReducer,
  reminders: ReminderReducer
});

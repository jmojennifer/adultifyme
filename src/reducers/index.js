import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TaskFormReducer from './TaskFormReducer';

export default combineReducers({
  auth: AuthReducer,
  taskForm: TaskFormReducer
});

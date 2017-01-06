import { combineReducers } from 'redux';
import TaskFormReducer from './TaskFormReducer';

export default combineReducers({
  taskForm: TaskFormReducer
});

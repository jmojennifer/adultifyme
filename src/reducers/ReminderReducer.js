import {
  REMINDER_CREATE, REMINDER_SAVE, REMINDER_DELETE
} from '../actions/types';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REMINDER_CREATE:
      return state;
    case REMINDER_SAVE:
      return state;
    case REMINDER_DELETE:
      return state;
    default:
      return state;
  }
};

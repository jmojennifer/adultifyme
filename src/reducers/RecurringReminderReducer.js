import {
  RECURRING_REMINDERS_CREATE,
  RECURRING_REMINDERS_SAVE,
  RECURRING_REMINDERS_DELETE
} from '../actions/types';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECURRING_REMINDERS_CREATE:
      return state;
    case RECURRING_REMINDERS_SAVE:
      return state;
    case RECURRING_REMINDERS_DELETE:
      return state;
    default:
      return state;
  }
};

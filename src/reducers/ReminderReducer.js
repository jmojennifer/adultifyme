import {
  REMINDER_CREATE
} from '../actions/types';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REMINDER_CREATE:
      return state;
    default:
      return state;
  }
};

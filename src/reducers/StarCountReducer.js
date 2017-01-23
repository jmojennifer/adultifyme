import { INITIAL_STAR_COUNT_SET_UP, STAR_COUNT_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIAL_STAR_COUNT_SET_UP:
      return state;
    case STAR_COUNT_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

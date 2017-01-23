import { STAR_COUNT_INCREASE } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STAR_COUNT_INCREASE:
      return action.type;
    default:
      return state;
  }
};

import { STAR_COUNT } from '../actions/types';

const INITIAL_STATE = {
  starCount: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STAR_COUNT:
    const starCount = INITIAL_STATE.starCount += 1;
    console.log(starCount);
      return { ...state, starCount };
    default:
      return state;
  }
};

import {
  STAR_COUNT
} from './types';

export const starIncrease = () => {
  return (dispatch) => {
    dispatch({
      type: STAR_COUNT,
    });
  };
};

import { TASK_UPDATE, TASK_CREATE } from '../actions/types';

const INITIAL_STATE = {
  title: '',
  description: '',
  personal_motivation: '',
  category: '',
  due_date: '',
  time_due: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TASK_UPDATE:
      // action.payload === { prop: 'title', value: 'Take Vitamin C' }
      // [] below is not an array;
      // it's key interpolation allowing each applicable field prop to be used
      return { ...state, [action.payload.prop]: action.payload.value };
    case TASK_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

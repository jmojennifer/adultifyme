import {
  FORM_UPDATE, RECURRING_TASK_CREATE, RECURRING_TASK_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  description: '',
  personalMotivation: '',
  category: '',
  frequency: '',
  startDate: '',
  endDate: '',
  recurringTime: '',
  reminderID: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_UPDATE:
      // action.payload === { prop: 'title', value: 'Take Vitamin C' }
      // [] below is not an array;
      // it's key interpolation allowing each applicable field prop to be used
      return { ...state, [action.payload.prop]: action.payload.value };
    case RECURRING_TASK_CREATE:
      return INITIAL_STATE;
    case RECURRING_TASK_SAVE_SUCCESS :
    return INITIAL_STATE;
    default:
      return state;
  }
};

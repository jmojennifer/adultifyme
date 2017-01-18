import {
  CREATE_FORM_STATE_RESET, FORM_UPDATE, TASK_CREATE, TASK_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  description: '',
  personalMotivation: '',
  category: '',
  dueDate: '',
  timeDue: '',
  reminderID: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_FORM_STATE_RESET:
    return INITIAL_STATE;
    case FORM_UPDATE:
      // action.payload === { prop: 'title', value: 'Take Vitamin C' }
      // [] below is not an array;
      // it's key interpolation allowing each applicable field prop to be used
      return { ...state, [action.payload.prop]: action.payload.value };
    case TASK_CREATE:
      return INITIAL_STATE;
    case TASK_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

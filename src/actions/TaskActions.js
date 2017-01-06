import { TASK_CREATE } from './types';

export const taskCreate = ({ prop, value }) => {
  return {
    type: TASK_CREATE,
    payload: { prop, value }
  };
};

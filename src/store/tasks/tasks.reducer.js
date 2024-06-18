import { TASKS_ACTION_TYPES } from './tasks.types';

export const TASKS_INITIAL_STATE = {
    tasks: [],
    error: null,
};

export const tasksReducer = (
  state = TASKS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case TASKS_ACTION_TYPES.FETCH_TASKS_START:
      return { ...state };
    case TASKS_ACTION_TYPES.FETCH_TASKS_SUCCESS:
      return { ...state, tasks: payload };
    case TASKS_ACTION_TYPES.FETCH_TASKS_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};

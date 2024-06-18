import { TASKS_ACTION_TYPES } from './tasks.types';

import { createAction } from '../../utils/reducer/reducer.utils';

export const fetchTasksStart = () =>
  createAction(TASKS_ACTION_TYPES.FETCH_TASKS_START);

export const fetchTasksSuccess = (tasksArray) =>
  createAction(
    TASKS_ACTION_TYPES.FETCH_TASKS_SUCCESS,
    tasksArray
  );

export const fetchTasksFailed = (error) =>
  createAction(TASKS_ACTION_TYPES.FETCH_TASKS_FAILED, error);





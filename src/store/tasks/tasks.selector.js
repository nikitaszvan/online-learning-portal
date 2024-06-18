import { createSelector } from 'reselect';

const selectTasksReducer = (state) => state.tasks;

export const selectTasks = createSelector(
  [selectTasksReducer],
  (tasksSlice) => tasksSlice.tasks
);

export const selectTasksMap = createSelector(
  [selectTasks],
  (tasks) =>
    tasks.reduce((acc, tasks) => {
      const { id, taskDescription } = tasks;
      acc[id] = taskDescription;
      return acc;
    }, {})
);


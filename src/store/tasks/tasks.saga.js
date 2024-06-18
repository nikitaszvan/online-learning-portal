import { takeLatest, all, call, put } from 'redux-saga/effects';

import { 
    getTasks
} from '../../utils/firebase/firebase.utils';

import {
    fetchTasksSuccess,
    fetchTasksFailed
} from './tasks.action';

import { TASKS_ACTION_TYPES } from './tasks.types';

export function* fetchTasksAsync() {
  try {
    const tasksArray = yield call(getTasks, 'student-task-list');
    yield put(fetchTasksSuccess(tasksArray));
  } catch (error) {
    yield put(fetchTasksFailed(error));
  }
}

export function* onFetchTasks() {
  yield takeLatest(
    TASKS_ACTION_TYPES.FETCH_TASKS_START,
    fetchTasksAsync
  );
}

export function* tasksSaga() {
  yield all([
    call(onFetchTasks),
]);
}

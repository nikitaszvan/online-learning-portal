import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCoursesAndDocuments } from '../../utils/firebase/firebase.utils';

import {
  fetchCoursesSuccess,
  fetchCoursesFailed,
} from './courses.action';

import { COURSES_ACTION_TYPES } from './courses.types';

export function* fetchCoursesAsync() {
  try {
    const coursesArray = yield call(getCoursesAndDocuments, 'courses');
    yield put(fetchCoursesSuccess(coursesArray));
  } catch (error) {
    yield put(fetchCoursesFailed(error));
  }
}

export function* onFetchCourses() {
  yield takeLatest(
    COURSES_ACTION_TYPES.FETCH_COURSES_START,
    fetchCoursesAsync
  );
}

export function* coursesSaga() {
  yield all([call(onFetchCourses)]);
}

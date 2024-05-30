import { takeLatest, all, call, put } from 'redux-saga/effects';

import { 
  getCoursesAndDocuments,
  updateGradeVisibilityInDatabase
} from '../../utils/firebase/firebase.utils';

import {
  fetchCoursesSuccess,
  fetchCoursesFailed,
  setCourseGradeToggle,
  toggleGradeVisibility
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

export function* toggleGradeVisibilityAsync(action) {
  try {
    const {courseId} = action;
    yield call(updateGradeVisibilityInDatabase, courseId);
  } catch (error) {
    yield 
  }
}

export function* coursesSaga() {
  yield all([call(onFetchCourses)]);
}

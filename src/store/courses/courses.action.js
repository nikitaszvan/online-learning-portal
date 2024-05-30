import { COURSES_ACTION_TYPES } from './courses.types';

import { createAction } from '../../utils/reducer/reducer.utils';

export const fetchCoursesStart = () =>
  createAction(COURSES_ACTION_TYPES.FETCH_COURSES_START);

export const fetchCoursesSuccess = (coursesArray) =>
  createAction(
    COURSES_ACTION_TYPES.FETCH_COURSES_SUCCESS,
    coursesArray
  );

export const fetchCoursesFailed = (error) =>
  createAction(COURSES_ACTION_TYPES.FETCH_COURSES_FAILED, error);

export const toggleGradeVisibility = (courseId) => 
  createAction(COURSES_ACTION_TYPES.TOGGLE_GRADE_VISIBILITY, courseId);


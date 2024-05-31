import { COURSES_ACTION_TYPES } from './courses.types';

export const COURSES_INITIAL_STATE = {
  courses: [],
  isLoading: false,
  error: null,
};

export const coursesReducer = (
  state = COURSES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case COURSES_ACTION_TYPES.FETCH_COURSES_START:
      return { ...state, isLoading: true };
    case COURSES_ACTION_TYPES.FETCH_COURSES_SUCCESS:
      return { ...state, courses: payload, isLoading: false };
    case COURSES_ACTION_TYPES.FETCH_COURSES_FAILED:
      return { ...state, error: payload, isLoading: false };
    case COURSES_ACTION_TYPES.TOGGLE_GRADE_VISIBILITY:
      const { payload: {courseId, showGrade} } = action;
      return {
        ...state,
        courses: state.courses.map(course => {
          if (course.id == courseId) {
            return {
              ...course,
              courseDescription: {
              ...course.courseDescription,
              showGrade: !showGrade
              }
            };
          }
          return course;
        })
      };
    default:
      return state;
  }
};

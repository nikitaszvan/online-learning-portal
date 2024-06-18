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

    default:
      return state;
  }
};

import { createSelector } from 'reselect';

const selectCoursesReducer = (state) => state.courses;

export const selectCourses = createSelector(
  [selectCoursesReducer],
  (coursesSlice) => coursesSlice.courses
);

export const selectCoursesMap = createSelector(
  [selectCourses],
  (courses) =>
    courses.reduce((acc, courses) => {
      const { id, courseDescription } = courses;
      acc[id] = courseDescription;
      return acc;
    }, {})
);

export const selectCoursesIsLoading = createSelector(
  [selectCoursesReducer],
  (coursesSlice) => coursesSlice.isLoading
);

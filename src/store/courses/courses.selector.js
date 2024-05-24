import { createSelector } from 'reselect';

const selectCoursesReducer = (state) => state.courses.coursesMap;

export const selectCourses = createSelector(
  [selectCoursesReducer],
  (coursesSlice) => coursesSlice.courses
);

export const selectCoursesMap = createSelector(
  [selectCourses],
  (courses) =>
    courses.reduce((acc, courses) => {
      const { title, items } = courses;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCoursesIsLoading = createSelector(
  [selectCoursesReducer],
  (coursesSlice) => coursesSlice.isLoading
);

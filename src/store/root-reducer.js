import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { coursesReducer } from './courses/courses.reducer';
import { quizReducer } from './quiz/quiz.reducer';
import { sideNavMenuReducer } from './side-nav/side-nav.reducer';
import { tasksReducer } from './tasks/tasks.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  courses: coursesReducer,
  sideNavMenu: sideNavMenuReducer,
  tasks: tasksReducer,
  quiz: quizReducer,
});

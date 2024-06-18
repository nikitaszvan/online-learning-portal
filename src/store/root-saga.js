import { all, call } from 'redux-saga/effects';

import { coursesSaga } from './courses/courses.saga';
import { userSagas } from './user/user.saga';
import { sideNavMenuSaga } from './side-nav/side-nav.saga';
import { tasksSaga } from './tasks/tasks.saga';

export function* rootSaga() {
  yield all([call(coursesSaga), call(userSagas), call(sideNavMenuSaga), call(tasksSaga)]);
}

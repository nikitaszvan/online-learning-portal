import { takeLatest, all, call, put } from 'redux-saga/effects';

import { 
    getSideNavMenuOptions
} from '../../utils/firebase/firebase.utils.mjs';

import {
    fetchSideNavMenuSuccess,
    fetchSideNavMenuFailed
} from './side-nav.action';

import { SIDE_NAV_MENU_ACTION_TYPES } from './side-nav.types';

export function* fetchSideNavMenuAsync() {
  try {
    const sideNavMenuArray = yield call(getSideNavMenuOptions, 'side-nav-menu');
    yield put(fetchSideNavMenuSuccess(sideNavMenuArray));
  } catch (error) {
    yield put(fetchSideNavMenuFailed(error));
  }
}

export function* onFetchSideNavMenu() {
  yield takeLatest(
    SIDE_NAV_MENU_ACTION_TYPES.FETCH_SIDE_NAV_MENU_START,
    fetchSideNavMenuAsync
  );
}

export function* sideNavMenuSaga() {
  yield all([
    call(onFetchSideNavMenu),
]);
}

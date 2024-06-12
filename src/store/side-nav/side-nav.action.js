import { SIDE_NAV_MENU_ACTION_TYPES } from './side-nav.types';

import { createAction } from '../../utils/reducer/reducer.utils';

export const fetchSideNavMenuStart = () =>
  createAction(SIDE_NAV_MENU_ACTION_TYPES.FETCH_SIDE_NAV_MENU_START);

export const fetchSideNavMenuSuccess = (sideNavMenuArray) =>
  createAction(
    SIDE_NAV_MENU_ACTION_TYPES.FETCH_SIDE_NAV_MENU_SUCCESS,
    sideNavMenuArray
  );

export const fetchSideNavMenuFailed = (error) =>
  createAction(SIDE_NAV_MENU_ACTION_TYPES.FETCH_SIDE_NAV_MENU_FAILED, error);





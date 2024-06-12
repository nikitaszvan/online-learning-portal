import { SIDE_NAV_MENU_ACTION_TYPES } from './side-nav.types';

export const SIDE_NAV_MENU_INITIAL_STATE = {
    sideNavMenu: [],
    error: null,
};

export const sideNavMenuReducer = (
  state = SIDE_NAV_MENU_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case SIDE_NAV_MENU_ACTION_TYPES.FETCH_SIDE_NAV_MENU_START:
      return { ...state };
    case SIDE_NAV_MENU_ACTION_TYPES.FETCH_SIDE_NAV_MENU_SUCCESS:
      return { ...state, sideNavMenu: payload };
    case SIDE_NAV_MENU_ACTION_TYPES.FETCH_SIDE_NAV_MENU_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};

import { createSelector } from 'reselect';

const selectSideNavMenuReducer = (state) => state.sideNavMenu;

export const selectSideNavMenu = createSelector(
  [selectSideNavMenuReducer],
  (sideNavMenuSlice) => sideNavMenuSlice.sideNavMenu
);

export const selectSideNavMenuMap = createSelector(
  [selectSideNavMenu],
  (sideNavMenu) =>
    sideNavMenu.reduce((acc, sideNavMenu) => {
      const { id, subMenuOptions } = sideNavMenu;
      acc[id] = subMenuOptions;
      return acc;
    }, {})
);


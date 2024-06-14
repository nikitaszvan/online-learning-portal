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
      const { id, menuIcon, menuTitle, subMenuOptions } = sideNavMenu;
      acc[id] = {menuIcon, menuTitle, subMenuOptions};
      return acc;
    }, {})
);


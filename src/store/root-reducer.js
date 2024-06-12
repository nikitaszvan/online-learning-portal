import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { coursesReducer } from './courses/courses.reducer';
import { cartReducer } from './cart/cart.reducer';
import { sideNavMenuReducer } from './side-nav/side-nav.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  courses: coursesReducer,
  sideNavMenu: sideNavMenuReducer,
  cart: cartReducer,
});

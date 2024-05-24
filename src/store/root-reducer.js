import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { coursesReducer } from './courses/courses.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  courses: coursesReducer,
  cart: cartReducer,
});

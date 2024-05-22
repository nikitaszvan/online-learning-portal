import { USER_ACTION_TYPES } from './user.types';
import { UserAction } from './user.action';

import { UserData } from '../../utils/firebase/firebase.utils';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

/* Each property is marked as readonly, indicating that once assigned, their values cannot be changed */

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action = {} as UserAction

  /* state: This parameter represents the current state of the user, initialized with INITIAL_STATE as its default value.
action: This parameter represents the action dispatched to the reducer, initialized with an empty object as its default value 
and type assertion {} as UserAction. */
) => {
  const { type, payload } = action;

  /* This line destructures the action parameter into its type and payload properties. */

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }

  /* This switch statement handles different action types and updates the UserState accordingly:
  If the action type is SIGN_IN_SUCCESS, it updates the currentUser property in the state with the payload data.
  If the action type is SIGN_OUT_SUCCESS, it sets the currentUser property to null.
  If the action type is any of SIGN_OUT_FAILED, SIGN_IN_FAILED, or SIGN_UP_FAILED, it updates the error property in the state with the payload data.
  For any other action types, it returns the current state without making any changes. */
};

/* userReducer is responsible for handling user-related actions and updating the user state accordingly based on the action type and payload data. */



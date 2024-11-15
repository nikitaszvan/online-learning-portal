import { USER_ACTION_TYPES } from './user.types';
import { createAction, Action } from '../../utils/reducer/reducer.utils';

import { User } from 'firebase/auth';

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export type AdditionalInformation = {
  displayName?: string;
};

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

/*An action in the Redux pattern imported from reducer.utils that requires a type const and an optional payload, USER_ACTION_TYPES.CHECK_USER_SESSION 
  refers to a specific action type constant that identifies the action to check the user session. */

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type GoogleSignInSuccess = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_SUCCESS, UserData>;

export type GoogleSignInFailed = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_FAILED, Error>;

export type EmailSignInStart = Action<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignInSuccess = Action<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;

export type SignInFailed = Action<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;

export type SignUpStart = Action<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string }
>;

export type SignUpSuccess = Action<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;

export type SignUpFailed = Action<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = Action<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

export type UserAction =
  | CheckUserSession
  | GoogleSignInStart
  | GoogleSignInSuccess
  | GoogleSignInFailed
  | EmailSignInStart
  | SignInSuccess
  | SignInFailed
  | SignUpStart
  | SignUpSuccess
  | SignUpFailed
  | SignOutStart
  | SignOutSuccess
  | SignOutFailed;

/* A union type comprising several other types. Each of these types
  represents a different action that can occur within a user-related feature of an application */

export const checkUserSession = (): CheckUserSession =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = (): GoogleSignInStart =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const googleSignInSuccess = (user: UserData): GoogleSignInSuccess =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_SUCCESS, user);

export const googleSignInFailed = (error: Error): GoogleSignInFailed =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_FAILED, error);

export const emailSignInStart = (
  email: string,
  password: string
): EmailSignInStart =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user: UserData): SignInSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error: Error): SignInFailed =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (
  email: string,
  password: string,
  displayName: string
): SignUpStart =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (
  user: User,
  additionalDetails: AdditionalInformation
): SignUpSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error: Error): SignUpFailed =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = (): SignOutStart =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = (): SignOutSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error: Error): SignOutFailed =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);

import { takeLatest, put, all, call } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
  googleSignInFailed,
  googleSignInSuccess,
} from './user.action';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from '../../utils/firebase/firebase.utils.mjs';

// export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {

//   /* This line declares a generator function named getSnapshotFromUserAuth. 
//   Generator functions are functions that can be paused and resumed, allowing for
//   asynchronous control flow using Redux Saga. */
//   try {
//     const userSnapshot= yield call(
//       /*This line uses the call effect from Redux Saga to invoke the createUserDocumentFromAuth 
//       function asynchronously. The yield keyword pauses the generator function until the asynchronous operation completes. */
//       createUserDocumentFromAuth,
//       userAuth,
//       additionalDetails
//     );
//     yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
//   } catch (error) {
//     yield put(signInFailed(error));
//   }
// }

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    const userSnapshot= yield call(
      /*This line uses the call effect from Redux Saga to invoke the createUserDocumentFromAuth 
      function asynchronously. The yield keyword pauses the generator function until the asynchronous operation completes. */
      createUserDocumentFromAuth,
      user
    );
    yield put(googleSignInSuccess(user));
  } catch (error) {
    yield put(googleSignInFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    const userSnapshot= yield call(
      /*This line uses the call effect from Redux Saga to invoke the createUserDocumentFromAuth 
      function asynchronously. The yield keyword pauses the generator function until the asynchronous operation completes. */
      createUserDocumentFromAuth,
      user
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    
  } catch (error) {
    yield put(signInFailed(error));
    
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    const userSnapshot= yield call(
      /*This line uses the call effect from Redux Saga to invoke the createUserDocumentFromAuth 
      function asynchronously. The yield keyword pauses the generator function until the asynchronous operation completes. */
      createUserDocumentFromAuth,
      userAuth
    );
  } catch (error) {
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(createUserDocumentFromAuth, user, { displayName });
    yield put(signUpSuccess(user, { displayName }));
    yield call(signInWithEmail, { payload: { email, password } });
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {

  try {
    const userSnapshot= yield call(
      /*This line uses the call effect from Redux Saga to invoke the createUserDocumentFromAuth 
      function asynchronously. The yield keyword pauses the generator function until the asynchronous operation completes. */
      createUserDocumentFromAuth,
      user,
      additionalDetails
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}

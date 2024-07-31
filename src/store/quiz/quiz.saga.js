import { call, put, takeEvery, all } from 'redux-saga/effects';
import { QUIZ_ACTION_TYPES } from './quiz.types';
import { updateAnswer } from './quiz.action';

// Worker Saga: Will be fired on QUIZ_ACTION_TYPES.FETCH_QUIZ_REQUEST actions
function* fetchQuizData() {
  try {
    // const data = yield call(null); // API call to fetch quiz data
    // // Handle the data (e.g., dispatch another action to store quiz data)
    // // For simplicity, we're just logging it here
    // console.log('Fetched quiz data:', data);
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    // Handle errors (e.g., dispatch a failure action)
  }
}

// Worker Saga: Will be fired on QUIZ_ACTION_TYPES.UPDATE_ANSWER actions
function* handleUpdateAnswer(action) {
  try {
    // Perform any side effects related to updating answers, if necessary
    console.log('Updating answer for question:', action.payload.questionId, 'Answer:', action.payload.answer);
    // Example: You might want to save the updated answer to an API
  } catch (error) {
    console.error('Error updating answer:', error);
    // Handle errors if needed
  }
}

// Watcher Saga: Watches for actions dispatched to the store and starts the corresponding worker saga
function* watchQuizActions() {
//   yield takeEvery(QUIZ_ACTION_TYPES.FETCH_QUIZ_REQUEST, fetchQuizData);
  yield takeEvery(QUIZ_ACTION_TYPES.UPDATE_ANSWER, handleUpdateAnswer);
}

// Root Saga: Combines all watcher sagas
export function* quizSaga() {
  yield all([
    watchQuizActions(),
    // Add other watcher sagas here
  ]);
}
import { call, put, fork, takeEvery, takeLatest } from "redux-saga/effects";
import {
  SEARCH_FOR_TWEETS_REQUESTED,
  searchForTweetsSuccess,
  searchForTweetsError
} from "./actions";
import axios from "axios";

const baseUrl = "http://localhost:7890/1.1";

function* fetchTweets(action) {
  const searchText = action.searchText;
  try {
    let tweets = yield call(axios.get, `${baseUrl}/search/tweets.json?q=${encodeURIComponent(searchText)}`);
    tweets = tweets.data.statuses;
    yield put(searchForTweetsSuccess(searchText, tweets));
  } catch (error) {
    yield put(searchForTweetsError(searchText, error.message));
  }
}

export function* watchSearchTweets() {
  yield takeEvery(SEARCH_FOR_TWEETS_REQUESTED, fetchTweets);
  // yield takeLatest(SEARCH_FOR_TWEETS_REQUESTED, fetchTweets);
}

export default function* rootSaga() {
  yield fork(watchSearchTweets);
}

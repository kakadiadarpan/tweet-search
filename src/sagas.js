import { call, put, fork, takeEvery, takeLatest } from "redux-saga/effects";
import {
  SEARCH_FOR_TWEETS_REQUESTED,
  searchForTweetsSuccess,
  searchForTweetsError
} from "./actions";
import axios from "axios";

const baseUrl = "http://localhost:7890/1.1";

const search = (query) => (
  axios.get(`${baseUrl}/search/tweets.json?q=${encodeURIComponent(query)}`)
);

function* fetchTweets(action) {
  try {
    let tweets = yield call(search, action.searchText);
    tweets = tweets.data.statuses;
    yield put(searchForTweetsSuccess(action.searchText, tweets));
  } catch (error) {
    yield put(searchForTweetsError(action.searchText, error.message));
  }
}

export function* watchSearchTweets() {
  yield takeEvery(SEARCH_FOR_TWEETS_REQUESTED, fetchTweets);
  // yield takeLatest(SEARCH_FOR_TWEETS_REQUESTED, fetchTweets);
}

export default function* rootSaga() {
  yield fork(watchSearchTweets);
}

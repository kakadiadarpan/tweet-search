import { combineReducers } from "redux";
import {
  SET_ACTIVE_SEARCH,
  SEARCH_FOR_TWEETS_REQUESTED,
  SEARCH_FOR_TWEETS_SUCCESS,
  SEARCH_FOR_TWEETS_ERROR
} from "./actions";

function tweets(state = {}, action) {
  switch (action.type) {
    case SEARCH_FOR_TWEETS_SUCCESS:
      const newState = { ...state };
      action.tweets.forEach(tweet => {
        newState[tweet.id] = tweet;
      });

      return newState;
    default:
      return state;
  }
}

function search(state = { searchText: "", isSearching: false }, action) {
  switch (action.type) {
    case SEARCH_FOR_TWEETS_REQUESTED:
      return { ...state, searchText: action.searchText, isSearching: true };
    case SEARCH_FOR_TWEETS_SUCCESS:
    case SEARCH_FOR_TWEETS_ERROR:
      return { ...state, isSearching: false };
    default:
      return state;
  }
}

function searches(state = { activeSearch: "", searches: {} }, action) {
  switch (action.type) {
    case SEARCH_FOR_TWEETS_REQUESTED:
      return {
        ...state,
        activeSearch: action.searchText,
        searches: {
          ...state.searches,
          [action.searchText]: search(state.searches[action.searchText], action)
        }
      };
    case SEARCH_FOR_TWEETS_SUCCESS:
      return {
        ...state,
        error: null,
        searches: {
          ...state.searches,
          [action.searchText]: search(state.searches[action.searchText], action)
        }
      };
    case SEARCH_FOR_TWEETS_ERROR:
      return {
        ...state,
        error: action.error
      };
    case SET_ACTIVE_SEARCH:
      return {
        ...state,
        activeSearch: action.searchText
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  tweets,
  searches
});

export default reducer;

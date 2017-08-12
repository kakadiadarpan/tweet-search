export const SEARCH_FOR_TWEETS_REQUESTED = 'tweet/search/GET';
export const SEARCH_FOR_TWEETS_SUCCESS = 'tweet/search/GET/SUCCESS';
export const SEARCH_FOR_TWEETS_ERROR = 'tweet/search/GET/ERROR';
export const SET_ACTIVE_SEARCH = 'tweet/search/active/SET';

export function searchForTweetsRequested(searchText) {
  return {
    type: SEARCH_FOR_TWEETS_REQUESTED,
    searchText
  }
}

export function searchForTweetsSuccess(searchText, tweets) {
  return {
    type: SEARCH_FOR_TWEETS_SUCCESS,
    searchText,
    tweets
  };
}

export function searchForTweetsError(searchText, error) {
  return {
    type: SEARCH_FOR_TWEETS_ERROR,
    searchText,
    error
  };
}

export function setActiveSearch(searchText) {
  return {
    type: SET_ACTIVE_SEARCH,
    searchText
  };
}

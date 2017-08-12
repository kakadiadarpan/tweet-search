export const SEARCH_FOR_TWEETS_REQUESTED = 'tweet/search/GET';
export const SEARCH_FOR_TWEETS_SUCCESS = 'tweet/search/GET/SUCCESS';
export const SEARCH_FOR_TWEETS_ERROR = 'tweet/search/GET/ERROR';
export const SET_ACTIVE_SEARCH = 'tweet/search/active/SET';

export const searchForTweetsRequested = (searchText) => (
  {
    type: SEARCH_FOR_TWEETS_REQUESTED,
    searchText
  }
);

export const searchForTweetsSuccess = (searchText, tweets) => (
  {
    type: SEARCH_FOR_TWEETS_SUCCESS,
    searchText,
    tweets
  }
);

export const searchForTweetsError = (searchText, error) => (
  {
    type: SEARCH_FOR_TWEETS_ERROR,
    searchText,
    error
  }
);

export const setActiveSearch = (searchText) => (
  {
    type: SET_ACTIVE_SEARCH,
    searchText
  }
);

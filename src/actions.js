import axios from "axios";
export const SEARCH_FOR_TWEETS = 'tweet/search/GET';
export const SEARCH_FOR_TWEETS_REQUESTED = 'tweet/search/GET/REQUESTED';
export const SET_ACTIVE_SEARCH = 'tweet/search/active/SET';

const baseUrl = "http://localhost:7890/1.1";

export const searchForTweetsRequested = (searchText) => (
  {
    type: SEARCH_FOR_TWEETS_REQUESTED,
    searchText
  }
);

export const fetchTweets = (searchText) => {
  return {
    type: SEARCH_FOR_TWEETS,
    payload: axios.get(`${baseUrl}/search/tweets.json?q=${encodeURIComponent(searchText)}`)
      .then((response) => {
        return response.data.statuses;
      }),
    meta: {
      searchText
    }
  };
}

export const setActiveSearch = (searchText) => (
  {
    type: SET_ACTIVE_SEARCH,
    searchText
  }
);

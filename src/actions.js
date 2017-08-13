import axios from "axios";
export const SEARCH_FOR_TWEETS_REQUESTED = 'tweet/search/GET';
export const SEARCH_FOR_TWEETS_SUCCESS = 'tweet/search/GET/SUCCESS';
export const SEARCH_FOR_TWEETS_ERROR = 'tweet/search/GET/ERROR';
export const SET_ACTIVE_SEARCH = 'tweet/search/active/SET';

const baseUrl = "http://localhost:7890/1.1";

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

export const fetchTweets = (searchText) => {
  return (dispatch) => {
    dispatch(searchForTweetsRequested(searchText));
    axios.get(`${baseUrl}/search/tweets.json?q=${encodeURIComponent(searchText)}`)
      .then(function (response){
        const tweets = response.data.statuses;
        dispatch(searchForTweetsSuccess(searchText, tweets));
      })
      .catch(function(error){
        dispatch(searchForTweetsError(searchText, error));
      });
  };
}

export const setActiveSearch = (searchText) => (
  {
    type: SET_ACTIVE_SEARCH,
    searchText
  }
);

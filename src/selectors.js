import { createSelector } from 'reselect'

export const tweetList = state => {
  const ids = Object.keys(state.tweets);
  return ids.map(id => state.tweets[id]);
}

export const searchQuery = state => state.searches.activeSearch;

export const searchesAsArray = state => {
  return Object.keys(state.searches.searches);
}

export const searchedTweets = createSelector(
  [tweetList, searchQuery],
  (tweets, search) => tweets.filter(tweet => {
    const isMentioned = tweet.text.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    const isAuthor = tweet.user.screen_name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    return isMentioned || isAuthor;
  })
);

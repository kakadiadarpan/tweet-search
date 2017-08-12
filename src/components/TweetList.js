import React from 'react';
import PropTypes from "prop-types";
import Tweet from 'react-tweet'

const TweetList = (props) => {
  return (
    <div className="TweetList">
      {
        props.isSearching ?
        <p className="placeholder">Searching...</p> :
        props.tweets.map(tweet => <Tweet data={tweet} key={tweet.id}/>)
      }
    </div>
  );
}

TweetList.propTypes = {
  tweets: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired
};

TweetList.defaultProps = {
  tweets: []
};

export default TweetList;

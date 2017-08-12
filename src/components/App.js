import React, { Component } from "react";
import { connect } from "react-redux";

import Search from "./Search";
import SearchTabs from "./SearchTabs";
import TweetList from "./TweetList";

import { searchForTweetsRequested, setActiveSearch } from "../actions";
import { searchedTweets, searchesAsArray } from "../selectors";

import "./style/App.css";

class App extends Component {
  _renderError() {
    return (
      <p className="error">
        {this.props.error}
      </p>
    );
  }

  _renderSearchResults() {
    if (this.props.activeSearch) {
      return (
        <TweetList
          tweets={this.props.tweets}
          isSearching={this.props.isSearching}
        />
      );
    } else {
      return <p className="placeholder">Give it a try, search something!</p>;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tweet search</h2>
        </div>
        <p className="App-intro">
          Search for tweets here.
        </p>
        <Search
          onSearch={this.props.searchForTweetsRequested}
          searchText={this.props.activeSearch}
        />

        <SearchTabs
          searches={this.props.searches}
          activeSearch={this.props.activeSearch}
          onClickTab={this.props.setActiveSearch}
        />

        <div className="search-results">
          {this.props.error ? this._renderError() : this._renderSearchResults()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const search = state.searches.searches[state.searches.activeSearch];
  let isSearching = search && search.isSearching;

  return {
    tweets: searchedTweets(state),
    activeSearch: state.searches.activeSearch,
    error: state.searches.error,
    isSearching,
    searches: searchesAsArray(state)
  };
};

export default connect(mapStateToProps, { searchForTweetsRequested, setActiveSearch })(App);

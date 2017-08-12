import React, { Component } from 'react';
import PropTypes from "prop-types";

import './style/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: props.searchText
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchText) {
      this.setState({ searchText: nextProps.searchText });
    }
  }

  _onChange = (e) => {
    this.setState({ searchText: e.target.value });
  }

  _onSubmit = (e) => {
    e.preventDefault();
    const { searchText } = this.state;
    if (searchText) {
      this.props.onSearch(searchText);
    }
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this._onSubmit}>
          <input
            className="input-text"
            type="text"
            name="search"
            value={this.state.searchText}
            onChange={this._onChange}
          />
          <button className="button" type="submit">Search</button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
};

Search.defaultProps = {
  searchText: ''
};

export default Search;

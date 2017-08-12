import React from "react";
import PropTypes from "prop-types";

import "./style/SearchTabs.css";

function SearchTabs(props) {
  return (
    <ul className="SearchTabs">
      {props.searches.map(search => {
        let className = "SearchTab";
        if (search === props.activeSearch) {
          className += " active";
        }
        function onClick() {
          props.onClickTab(search);
        }
        return (
          <li key={search} className={className} onClick={onClick}>
            {search}
          </li>
        );
      })}
    </ul>
  );
}

SearchTabs.propTypes = {
  searches: PropTypes.array.isRequired,
  activeSearch: PropTypes.string,
  onClickTab: PropTypes.func.isRequired
};

export default SearchTabs;

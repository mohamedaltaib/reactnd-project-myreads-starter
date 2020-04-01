import React, { Component } from "react";
import SearchResults from "./SearchResults";
import SearchBox from "./SearchBox";

class SearchPage extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <SearchResults />
      </div>
    );
  }
}

export default SearchPage;

import React, { Component } from "react";
import SearchResults from "./SearchResults";
import SearchBox from "./SearchBox";

class SearchPage extends Component {
  render() {
    return (
      <div>
        <SearchBox
          searchBooks={this.props.searchBooks}
          syncSearch={this.props.syncSearch}
        />
        <SearchResults
          books={this.props.books}
          updateShelf={this.props.updateShelf}
        />
      </div>
    );
  }
}

export default SearchPage;

import React, { Component } from "react";
import BookCard from "../BookCard";

class SearchResults extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          <BookCard imgURL="" bookTitle="" bookSubTitle="" />
        </ol>
      </div>
    );
  }
}

export default SearchResults;

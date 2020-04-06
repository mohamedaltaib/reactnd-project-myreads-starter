import React, { Component } from "react";
import BookCard from "../BookCard";

class SearchResults extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.books.map(book => (
            <BookCard
              key={book.id}
              book={book}
              updateShelf={this.props.updateShelf}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default SearchResults;

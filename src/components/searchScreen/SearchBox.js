import React, { Component } from "react";
import BackButton from "./BackButton";

class SearchBox extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <BackButton syncSearch={this.props.syncSearch} />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.props.searchBooks(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;

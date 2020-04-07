import React, { Component } from "react";
import BackButton from "./BackButton";

const SearchBox = props => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <BackButton syncSearch={props.syncSearch} />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={e => props.searchBooks(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

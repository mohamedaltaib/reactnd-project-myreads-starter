import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger";

class BookCard extends Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${this.props.book.imageLinks &&
                  this.props.book.imageLinks.thumbnail})`
              }}
            ></div>
            <ShelfChanger
              book={this.props.book}
              updateShelf={this.props.updateShelf}
            />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.subtitle}</div>
        </div>
      </li>
    );
  }
}

export default BookCard;

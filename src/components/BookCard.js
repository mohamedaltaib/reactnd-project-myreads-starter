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
                backgroundImage: this.props.imgURL
              }}
            ></div>
            <ShelfChanger />
          </div>
          <div className="book-title">{this.props.bookTitle}</div>
          <div className="book-authors">{this.props.bookSubTitle}</div>
        </div>
      </li>
    );
  }
}

export default BookCard;

import React, { Component } from "react";
import BookShelf from "./BookShelf";
import FloatingButton from "./FloatingButton";

class HomePAge extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              books={this.props.books.filter(
                book => book.shelf === "currentlyReading"
              )}
              updateShelf={this.props.updateShelf}
            />
            <BookShelf
              title="Want to Read"
              books={this.props.books.filter(
                book => book.shelf === "wantToRead"
              )}
              updateShelf={this.props.updateShelf}
            />
            <BookShelf
              title="Read"
              books={this.props.books.filter(book => book.shelf === "read")}
              updateShelf={this.props.updateShelf}
            />
          </div>
        </div>
        <FloatingButton />
      </div>
    );
  }
}

export default HomePAge;

import React, { Component } from "react";
import BookCard from "../BookCard";

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <BookCard
                key={book.id}
                book={book}
                updateShelf={this.props.updateShelf}
              />
            ))}
            {/* <BookCard
              id={this.props.id}
              imgURL="url(http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api)"
              bookTitle="To Kill a Mockingbird"
              bookSubTitle="Harper Lee"
              updateShelf={this.props.updateShelf}
            /> */}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;

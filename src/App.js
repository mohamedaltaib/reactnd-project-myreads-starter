import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./components/searchScreen/SearchPage";
import HomePage from "./components/homeScreen/HomePage";

class BooksApp extends React.Component {
  state = {
    AllBooks: [],
    searchResults: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState(() => ({
        AllBooks: books
      }))
    );
  }

  searchBooks = term => {
    if (term.length > 0) {
      BooksAPI.search(term).then(result => {
        if (!result || result.error) {
          this.setState({ searchedBooks: [] });
          return;
        }
        const resultBooks = result.map(item => {
          this.state.AllBooks.forEach(book => {
            if (book.id === item.id) item.shelf = book.shelf;
          });
          return item;
        });
        this.setState({
          searchResults: resultBooks
        });
      });
    } else {
      this.setState({
        searchResults: []
      });
    }
  };

  syncSearch = () => {
    BooksAPI.getAll().then(books =>
      this.setState(() => ({
        AllBooks: books
      }))
    );
    this.setState({
      searchResults: []
    });
  };

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.setState({
      AllBooks: this.state.AllBooks.map(b =>
        b.id === book.id ? { ...b, shelf: shelf } : b
      ),
      searchResults:
        this.state.searchResults &&
        this.state.searchResults.map(b =>
          b.id === book.id ? { ...b, shelf: shelf } : b
        )
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              AllBooks={this.state.AllBooks}
              updateShelf={this.updateShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage
              searchBooks={this.searchBooks}
              books={this.state.searchResults}
              updateShelf={this.updateShelf}
              syncSearch={this.syncSearch}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./components/searchScreen/SearchPage";
import HomePage from "./components/homeScreen/HomePage";

class BooksApp extends React.Component {
  state = {
    ShelfBooks: [],
    searchResults: []
  };

  /*
   After the component did mount Start fetching book shelf info
   from the server after and update currend state ifo to trigerthe
   React rerender the component.
  */
  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState(() => ({
        ShelfBooks: books
      }))
    );
  }

  /*
  This Function run by SearchBox component to fetch book list fromserver 
  based on the entred search term. And if the user clear the search box 
  the function will reset the search result state. 
  */
  searchBooks = term => {
    //if user enter any text in search box
    if (term.length > 0) {
      BooksAPI.search(term).then(result => {
        // return in case the is no result or the is issue in the server
        if (!result || result.error) {
          this.setState({ searchedBooks: [] });
          return;
        }

        const resultBooks = result.map(item => {
          // update new search result with stored bookshelt info for each book.
          this.state.ShelfBooks.forEach(book => {
            if (book.id === item.id) item.shelf = book.shelf;
          });
          return item;
        });

        //update the searchResult in the state object
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

  /*
  This function run when presing back button to sync the latest bookshelf
  status which has been updated and saved in the server and also reset
  old search results 
  */
  syncSearch = () => {
    BooksAPI.getAll().then(books =>
      this.setState(() => ({
        ShelfBooks: books
      }))
    );
    this.setState({
      searchResults: []
    });
  };

  /*
  This function used by ShelfChanger component (child component used by HomePage
    & SearchPage components ) to update shelf name based on user choosen reading
    state from the dropdown menu.
    component structure:
    HomePage->BookShelf->BookCard->ShelfChanger
    SearchPage->SearchResults->BookCard->ShelfChanger
  */
  updateShelf = (book, shelf) => {
    //update server shelf name status
    BooksAPI.update(book, shelf);
    //update current ShelfBooks state info
    this.setState({
      ShelfBooks: this.state.ShelfBooks.map(b =>
        b.id === book.id ? { ...b, shelf: shelf } : b
      ),
      //update if hte is searchResults defined and the updated book existes in list
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
              books={this.state.ShelfBooks}
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

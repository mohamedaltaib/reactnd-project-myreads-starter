import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./components/searchScreen/SearchPage";
import HomePage from "./components/homeScreen/HomePage";

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/search" render={() => <SearchPage />} />
      </div>
    );
  }
}

export default BooksApp;

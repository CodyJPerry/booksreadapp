import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf';
import Book from './Book';

class BooksApp extends React.Component {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    showSearchPage: false
  }


//Grab all current books from API
componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books });
  });
}

//Initialize objects into proper array for initial state
Init = () => {
  const { books, currentlyReading, wantToRead, read } = this.state;
  books.map((book) => {
    if (book.shelf === 'currentlyReading') {
      currentlyReading.push(book);
    }
    if (book.shelf === 'wantToRead') {
      wantToRead.push(book);
    }
    if (book.shelf === 'read') {
      read.push(book);
    }
  });
}
  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
              {this.Init()}
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf title="Currently Reading"/>
                <ol className="books-grid">
                {this.state.currentlyReading.map((book) => {
                  <li><Book /></li>
                })}
                </ol>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp

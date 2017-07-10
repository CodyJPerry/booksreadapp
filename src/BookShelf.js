import React, { Component } from 'react';
import Book from './Book';

  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
                {this.state.currentlyReading.map((book) => {
                  <li><Book bookTitle={book.title} /></li>
                })}
          </ol>
        </div>
     </div>
    )
  }
}

export default BookShelf;

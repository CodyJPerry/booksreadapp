import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <Book 
                            style={{width: 128, 
                                    height: 192, 
                                    bookImage: /* Will be pulled in from API */ 'placeholder' }}
                                    bookTitle="The Hobbit"
                                    bookAuthor="J.R.R. Tolkien" />
                      </li>
                      <li>
                        <Book
                            style={{width: 128,
                                    height: 174,
                                    bookImage: /* Will be pulled in from API */ 'placeholder' }}
                                    bookTitle="Oh, the Places You'll Go!"
                                    bookAuthor="Seuss" />
                      </li>
                      <li>
                        <Book
                            style={{width: 128,
                                    height: 192,
                                    bookImage: /* Will be pulled in from API */ 'placeholder' }}
                                    bookTitle="The Adventures of Tom Sawyer"
                                    bookAuthor="Mark Twain" />
                      </li>
                    </ol>
                  </div>
             </div>
        )
    }
}

export default BookShelf;

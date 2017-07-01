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
                                    height: 193, 
                                    bookImage: /* Will be pulled in from API */ 'placeholder' }}
                                    bookTitle="1776"
                                    bookAuthor="David McCullough" />
                      </li>
                      <li>
                        <Book
                            style={{width: 128,
                                    height: 188,
                                    bookImage: /* Will be pulled in from API */ 'placeholder' }}
                                    bookTitle="Harry Potter and the Sorcerer's Stone"
                                    bookAuthor="J.K. Rowling" />
                      </li>
                    </ol>
                  </div>
             </div>
        )
    }
}

export default BookShelf;

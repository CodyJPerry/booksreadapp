import React, { Component } from 'react';
import Book from './Book';

class CurrentlyReading extends Component {
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
                                    bookTitle="To Kill a Mockingbird"
                                    bookAuthor="Harper Lee" />
                      </li>
                      <li>
                        <Book
                            style={{width: 128,
                                    height: 188,
                                    bookImage: /* Will be pulled in from API */ 'placeholder' }}
                                    bookTitle="Ender's Game"
                                    bookAuthor="Orson Scott Card" />
                      </li>
                    </ol>
                  </div>
             </div>
        )
    }
}

export default CurrentlyReading;

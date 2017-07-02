import React, { Component } from 'react';
import Book from './Book';

class Read extends Component {

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
                                    bookTitle={this.props.bookTitle}
                                    bookAuthor={this.props.bookAuthor} />
                      </li>
                      <li>
                        <Book
                            style={{width: 128,
                                    height: 174,
                                    bookImage: /* Will be pulled in from API */ 'placeholder' }}
                                    bookTitle={this.props.bookTitle}
                                    bookAuthor={this.props.bookAuthor} />
                      </li>
                      <li>
                        <Book
                            style={{width: 128,
                                    height: 192,
                                    bookImage: /* Will be pulled in from API */ 'placeholder' }}
                                    bookTitle={this.props.bookTitle}
                                    bookAuthor={this.props.bookAuthor} />
                      </li>
                    </ol>
                  </div>
             </div>
        )
    }
}

export default Read;

import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
    render() {
        return (
           <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: this.props.width, height: this.props.height, backgroundImage: this.props.bookImage }}></div>
                    <BookShelfChanger />
                </div>
                <div className="book-title">{this.props.bookTitle}</div>
                    <div className="book-authors">{this.props.bookAuthor}</div>
                </div> 
        )
    }
}

export default Book;

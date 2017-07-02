import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';

//stateless functional component
function Book(props) {
        return (
           <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: props.width, height: props.height, backgroundImage: props.bookImage }}></div>
                    <BookShelfChanger />
                </div>
                <div className="book-title">{props.bookTitle}</div>
                    <div className="book-authors">{props.bookAuthor}</div>
                </div> 
        )
}

export default Book;

import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      //grab collection of current books
      this.setState({ books });
    });
  }

  updateShelf = () => {
    // BooksAPI.update(id, shelf).then((book) => {
    //   //pass book.id and book.shelf based on the bookShelfChanger option
    // });

    
     console.log('yes');
  }



  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage onUpdate={this.updateShelf}  />
        ) : (
          
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              {/* book shelf */}
                <BookShelf
                  title='Currently Reading'
                  shelf={this.state.books.filter((book) => book.shelf === "currentlyReading").map((book) => {
                   return (
                     <li key={book.id}>
                      <Book 
                        bookTitle={book.title}
                        bookAuthor={book.authors[0]}
                        width={128}
                        height={192}
                        bookImage={`url(${book.imageLinks.thumbnail})`}
                        onUpdate={this.updateShelf}
                        
                      />
                  </li>
                   ) 
                })}
              />

              <BookShelf 
                title="Want to Read" 
                shelf={this.state.books.filter((book) => book.shelf === "wantToRead").map((book) => {
                  return (
                    <li key={book.id}>
                      <Book 
                        bookTitle={book.title}
                        bookAuthor={book.authors[0]}
                        width={128}
                        height={192}
                        bookImage={`url(${book.imageLinks.thumbnail})`}
                        onUpdate={this.updateShelf}
                      />
                  </li>
                  )
                })}/>
                
                <BookShelf 
                  title="Read"
                  shelf={this.state.books.filter((book) => book.shelf === "read").map((book) => {
                    return (
                  <li key={book.id}>
                      <Book 
                        bookTitle={book.title}
                        bookAuthor={book.authors[0]}
                        width={128}
                        height={192}
                        bookImage={`url(${book.imageLinks.thumbnail})`}
                        onUpdate={this.updateShelf}
                      />
                  </li>       
                    )
                  })}/>
                </div>
                  </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}



class SearchPage extends React.Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query });
    BooksAPI.search(query, 20).then((books) => {
      this.setState({ books });
    });
  }

  render() {
    const { query } = this.state;
    
  return (
     <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
        <ol className="books-grid">
          {this.state.books && this.state.books.map(book => (
              <li key={book.id}>
                <Book
                  bookTitle={book && book.title}
                  bookAuthor={book.authors && book.authors[0]}
                  width={128}
                  height={192}
                  bookImage={book && `url(${book.imageLinks.thumbnail})`}
                  onUpdate={this.onUpdate}
                />
            </li>
            )
          )}
        </ol>
      </div>
  </div>
  )
  }
}


//Stateless function component
const BookShelf = (props) => {
    return (
      <div className="bookshelf">
          <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
               {props.shelf}
            </ol>
      </div>
  </div>
    )
  }


//stateless functional component
const Book = (props) => {
        return (
           <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: props.width, height: props.height, backgroundImage: props.bookImage }}></div>
                    <BookShelfChanger update={props.onUpdate} />
                </div>
                <div className="book-title">{props.bookTitle}</div>
                    <div className="book-authors">{props.bookAuthor}</div>
                </div> 
        )
}


/* Stateless Functional Component */
const BookShelfChanger = (props) => {
    return (
        <div className="book-shelf-changer">
            <select onChange={props.update}>
               <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>                 
    )
} 




export default BooksApp

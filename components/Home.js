import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class Home extends React.Component {

    render() {
      const {state, update} = this.props;
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                    <BookShelf shelfTitle="Currently Reading" books={state.books.filter(book => book.shelf === "currentlyReading")} onChange={update} />
                    <BookShelf shelfTitle="Want To Read" books={state.books.filter(book => book.shelf === "wantToRead")} onChange={update}  />
                    <BookShelf shelfTitle="Read" books={state.books.filter(book => book.shelf === "read")} onChange={update}  />
                </div>
              </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )
    }
}

export default Home
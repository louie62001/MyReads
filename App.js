import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
            query: '',
            results: [],
            books: []
  }
   componentDidMount() {
     BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

searchBooks = (query) => {
    this.setState(() => ({
      query: query
    }))
      if(query.length > 0) {
      BooksAPI.search(query)
          .then((results) => {
          this.setState(()=> ({
              results
          }))
          })
      } else {
        while(this.state.results.length > 0) {
          this.state.results.pop();
        }
        this.setState(() => ({
                query: ''              
        }))
      }
  }

    updateShelf = (event, book) => {
    BooksAPI.update(book, event)
      .then(() => {
        this.setState((currentState) => ({
          books: currentState.books.filter((b) => {
            if( b.id === book.id) {
              return book.shelf = event
            }
            else {
              return book
            }
          })
        }))
      })
  }
  render() {
    const HomePage = () => {
          return (
            <Home state={this.state} update={this.updateShelf} />
          )
        }
    const SearchPage = () => {
          return (
            <Search state={this.state} update={this.updateShelf} search={this.searchBooks}/>
          )
    }
    return (
      <div className="app">
        <Route exact path='/' render={HomePage} />
        <Route path='/search' render={SearchPage} />
      </div>
    )
  }
}

export default BooksApp

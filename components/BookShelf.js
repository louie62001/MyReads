import React from 'react'

class BookShelf extends React.Component {  

  render() {
    const {shelfTitle, books, onChange} = this.props;
    return (
      
      <div className="bookshelf">
        {shelfTitle.length > 0  && ( 
					<div key={shelfTitle}>
					  <h2 className="bookshelf-title" key={shelfTitle}>
        				{shelfTitle}
					  </h2>
          </div>
        )}
                <ol className="books-grid">  
    {books.map(book => {
      			return (        
            		<li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select value={book.shelf} onChange={(event, item) => onChange(event.target.value, book)} key={book.id}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option> 
                          </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    { book.authors && book.authors.map(author => {
                      return <div className="book-authors" key={author}>{author}</div>
                    })}
                  </div>
				        </li>
       	      
            )    
    })}
  </ol>
      </div>
    )
  }
}

export default BookShelf
import React from 'react'

class SearchResults extends React.Component {
  render() {
    const {results, books, onChange, query} = this.props;
    let finalResults = []
    if(results.length > 0 && query !== '') {
    results.forEach(result => {
      const existing = books.filter(book => book.id === result.id)
      if(existing.length > 0) {
        finalResults.push(...existing)
      } else {
        finalResults.push(result)
      }
    })
    }
    return (
      <ol className="books-grid">
                {finalResults.length > 3 && ( 
                    finalResults.map(result => {
                        return (
                            <li key={result.id}>
                                <div className="book">
                                    <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${result.imageLinks && result.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select 
                                            value={result.shelf ? result.shelf: "none"}
                                            onChange={(event, item) => onChange(event.target.value, result)}
                                            key={result.id}>
                                                    <option value="move" disabled>Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{result.title}</div>
                                    { result.authors && result.authors.map(author => {
                                        return (
                                            <div className="book-authors" key={author}>{author}</div>
                                            )
                                    })}
                                </div>
                            </li>
                        )
                    }
                ))}
      </ol>
    )
  }
}

export default SearchResults
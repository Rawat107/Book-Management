/**
 * 
 * BookList component - to diplay the list of books
 * Book component- individula books display
 * 
 * 
 */

import BookList from "./components/BookList"
import { Books } from "./utils/mockData"
import "./components/style.css"
import { useState } from "react"

function App() {

  const [searchText, setSearchText] = useState("")

  const [filteredBooks, setFilteredBooks] = useState(Books)

  function handleSearch(){
    const filteredBooks = Books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()));

    setFilteredBooks(filteredBooks)
  }

  function handleKeyDown(e){
    if (e.key === "Enter"){
      handleSearch();
    }
    }

  return ( 
    <>
    <div className="search">
      <h2 className="search-title">Search Books</h2>
      <div>

        <input type="text" name="search" id="search-input" onChange={(e) => setSearchText(e.target.value)} onKeyDown={handleKeyDown} placeholder="Search....."/>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
    <BookList booksData={filteredBooks}/>
    </>
  )
}

export default App

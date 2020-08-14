import React, { useState, useRef, useEffect } from 'react'
import { UseBookContext } from "../../utils/GlobalState"
import SearchBar from "../SearchBar"
import { UPDATE_BOOKS } from "../../utils/action"
import API from "../../utils/API"
import BookList from "../BookList"

function SearchPage() {

    const [state, dispatch] = UseBookContext()

    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        API.getBooks().then(response => {
            dispatch({ type: UPDATE_BOOKS, books: response.data })
        })
    }, [])

    return (

        <div>
        <SearchBar setSearchResults={setSearchResults} />
        <BookList book={searchResults}/>
        </div>
    )

}       
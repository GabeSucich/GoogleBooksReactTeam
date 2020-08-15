import React, { useState, useRef, useEffect } from 'react'
import { UseBookContext } from "../../utils/GlobalState"
import API from "../../utils/API"

function SearchPage() {

    const [state, dispatch] = UseBookContext()

    const [searchResults, setSearchResults] = useState([])

    // useEffect(() => {
    //     API.getBooks().then(response => {
    //         console.log("In API")
    //         dispatch({ type: UPDATE_BOOKS, books: response.data })
    //     })
    // }, [])

    console.log("Running Search PAge")

    return (
        <div>
        </div>
    )

}

export default SearchPage
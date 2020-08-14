import React, { useRef } from 'react'
import { UseBookContext } from "../../utils/GlobalState"
import API from "../../utils/API"

function SearchBar({setSearchResults}) {

    const searchQuery = useRef("")

    function handleSubmit(event) {
        event.preventDefault()
        API.searchBooks(searchQuery).then(data => {
            setSearchResults(data)
        })
    }

    return (
        <form>
            <input
                ref={searchQuery}
                placeholder="Search a Book"
            />
            <button type="submit" onClick={event => handleSubmit(event)}></button>
        </form>

    )

}
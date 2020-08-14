import React, {createContext, useReducer, useContext} from "react"
import {UPDATE_BOOKS, SET_CURRENT_BOOK} from "./action"

const BookContext = createContext({
    currentBook: {},
    books: []
})
const {Provider} = BookContext

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_BOOKS:
            return {
                ...state,
                books: action.books
            }
            break
        case SET_CURRENT_BOOK:
            return {
                ...state,
                currentBook: action.book
            }
            break
        default:
            return state
    }
}

//When I want to set new book to current book:
// -----> dispatch({action: SET_CURRENT_BOOK}, book: <new Current Book object>})

// When I want to refresh my database of books:
// -----> dispatch({action: UPDATE_BOOKS, books: <array of books from API call>})

const BookProvider = () => {

    const [state, dispatch] = useReducer(reducer, {})

    return <BookContext.Provider value={[state, dispatch]}/>
}

const UseBookContext = () => {
    return useContext(BookContext)
}

export default {BookProvider, UseBookContext}
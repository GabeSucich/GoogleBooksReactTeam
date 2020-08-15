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

export const BookProvider = () => {

    const [state, dispatch] = useReducer(reducer, {})

    return <Provider value={[state, dispatch]}/>
}

export const UseBookContext = () => {
    return useContext(BookContext)
}


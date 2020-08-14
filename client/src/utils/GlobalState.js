import React, {createContext, useReducer, useContext} from "react"

const BookContext = createContext({})
const {Provider} = BookContext

const reducer = (state, action) => {

}

const BookProvider = () => {

    const [state, dispatch] = useReducer(reducer, {})

    return <BookContext.Provider value={[state, dispatch]}/>
}

const UseBookContext = () => {
    return useContext(BookContext)
}

export default {BookProvider, UseBookContext}
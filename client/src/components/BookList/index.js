import React from "react"

function BookList(props) {

    return (
        <ul>
           {props.searchResults.map(book => {
               <ListItem book ={book}/>
           })}
        </ul>
    )

}
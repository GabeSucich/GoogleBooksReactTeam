import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import API from "./utils/API"

function App() {

  API.searchBooks("Harry").then(data => {
    console.log(data)
  })

  return (
    <div>
      <Router>
      </Router>
    </div>
  );
}


export default App;

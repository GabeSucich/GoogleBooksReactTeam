import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import NoMatch from "./pages/NoMatch"
import logo from "./logo.svg";
import {BookProvider} from "./utils/GlobalState"
import "./App.css";

function App() {
  return (
    <Router>
      <BookProvider>
      <div>
        <Switch>
          <Route exact path = {['/', '/search']} component={Search}/>
          <Route exact path = {'/saved'} component={Saved}/>
          <Route component = {NoMatch}/>
        </Switch>
      </div>
      </BookProvider>
    </Router>

  );
}


export default App;

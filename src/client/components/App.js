import React, { Component } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainBody from "./MainBody/MainBody";
import "./App.css";


class App extends Component {

  render() {
    return (
      <div className="viewport">
        <Header className="header" />
        <div className="body">
          <Sidebar className="sidebar" />
          <Router>
            <Switch>
              <Route path="/">
                <MainBody className="main_body" />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

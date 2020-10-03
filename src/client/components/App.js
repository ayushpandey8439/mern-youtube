import React, { Component } from "react";
import Header from "./Header/Header";
import Sidebar from './Sidebar/Sidebar'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar/>
      </div>
    );
  }
}

export default App;

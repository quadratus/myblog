import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Windup from "./Windup";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Route path="/" exact component={chart} /> */}
        <Windup />
      </div>
    );
  }
}

export default App;

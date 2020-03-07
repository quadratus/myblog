import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";

const Button = ({ className, onClick, children }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "What"
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <Route path="/" exact component={Login} />
      </div>
    );
  }
}

export default App;

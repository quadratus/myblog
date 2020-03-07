import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bulma/css/bulma.min.css";

function isSearched(searchTerm) {
  return function(item) {
    return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  };
}
//ES6 syntax
const ES6isSearched1 = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

function Search1(props) {
  const { value, onChange, children } = props;
  return (
    <form>
      {children} <input type="text" value={value} onChange={onChange} />
    </form>
  );
}

const ES6Search2= ({ value, onChange, children }) => (
  <form>
    {children}
    <input type="text" value={value} onChange={onChange} />
  </form>
);
//Above function can be made shorter by using ES6 arrow functions and destructuring
// the arguments while passing to the function itself, instead of doing it inside the
//function separately.
const ES6Search = ({ value, onChange, children }) => (
  <form>
    {children}
    <input type="text" value={value} onChange={onChange} />
  </form>
);

class Tryout extends Component {
  constructor(props) {
    super(props);
    this.state = { name };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }

  render() {
    return <input onChange={this.onChange}></input>;
  }
}

class DynamicSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: " " };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log("Value changed to " + event.target.value);
    if (event.target.value.toString() === "mena") {
      console.log("EMENACC01");
    }
    this.setState({ temperature: event.target.value });
  }
  render() {
    const temperature = this.state.temperature;
    return <input value={temperature} onChange={this.handleChange}></input>;
  }
}

export default Tryout;

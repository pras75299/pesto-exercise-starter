import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term],
    });
  };

  render() {
    return (
      <>
        <form className="App" onSubmit={this.onSubmit}>
          <label className="form-lebel">Add a new Grocery Item</label>
          <input
            className="form-input"
            value={this.state.term}
            onChange={this.onChange}
            placeholder="Enter grocery name"
          />
          <button className="form-submit-btn">Add Item</button>
        </form>
        <List items={this.state.items} />
      </>
    );
  }
}

function AppFunction() {
  // return ();
}

export default App;

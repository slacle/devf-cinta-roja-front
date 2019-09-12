import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      description: e.target[1].value,
      photo: e.target[2].value
    };

    this.setState(prevState => {
      return {
        items: [...prevState.items, newItem]
      };
    });

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };

  handleEdit = e => {
    console.log(e.target);
  };

  handleDelete = e => {
    console.log(e.target);
  };

  render() {
    return (
      <div className="App">
        <div className="container mt-5">
          <Main
            handleSubmit={this.handleSubmit}
            handleEdit={this.handleEdit}
            handleDelete={this.handleEdit}
            items={this.state.items}
          />
        </div>
      </div>
    );
  }
}

export default App;

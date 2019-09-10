import React, { Component } from "react";
import Item from "./components/Item";
import Form from "./components/Form";
// import Main from "./components/Main";

class App extends Component {
  constructor() {
    super();
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

  render() {
    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit} />
        <br />
        <hr />
        <br />
        {this.state.items.map((item, i) => {
          return (
            <Item
              key={i}
              name={item.name}
              description={item.description}
              photo={item.photo}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
      fieldEmpty: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://devf-cinta-roja-back.onrender.com/api/v1/get/items")
      .then((response) => {
        this.setState({ items: response.data, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      photo: e.target[0].value,
      title: e.target[1].value,
      description: e.target[2].value,
    };

    if (newItem.photo && newItem.title && newItem.description) {
      axios
        .post(
          "https://devf-cinta-roja-back.onrender.com/api/v1/create/item",
          newItem
        )
        .then((res) =>
          this.setState((prevState) => {
            return {
              items: [...prevState.items, res.data],
              fieldEmpty: false,
            };
          })
        );

      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
    } else {
      this.setState({ fieldEmpty: true });
      console.log("All fields are required.");
    }
  };

  handleDelete = (id) => {
    axios
      .delete(
        `https://devf-cinta-roja-back.onrender.com/api/v1/delete/item/${id}`
      )
      .then((res) => console.log(res.data));

    this.setState({
      items: this.state.items.filter((item) => item._id !== id),
    });
  };

  render() {
    return (
      <div className="App">
        <Nav items={this.state.items} />
        <div className="container mt-5">
          <Main
            handleSubmit={this.handleSubmit}
            handleDelete={this.handleDelete}
            items={this.state.items}
            isLoading={this.state.isLoading}
            fieldEmpty={this.state.fieldEmpty}
          />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios
      .get("https://devf-cinta-roja.herokuapp.com/api/v1/get/items")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({ items: response.data });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      photo: e.target[0].value,
      title: e.target[1].value,
      description: e.target[2].value
    };

    axios
      .post("https://devf-cinta-roja.herokuapp.com/api/v1/create/item", newItem)
      .then(res => console.log(res.data));

    this.setState(prevState => {
      return {
        items: [...prevState.items, newItem]
      };
    });

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };

  handleEdit = id => {
    console.log(id);
  };

  handleDelete = id => {
    axios
      .delete(`https://devf-cinta-roja.herokuapp.com/api/v1/delete/item/${id}`)
      .then(res => console.log(res.data));

    this.setState({
      items: this.state.items.filter(item => item._id !== id)
    });
  };

  render() {
    return (
      <>
        <Nav />
        <div className="App">
          <div className="container mt-5">
            <Main
              handleSubmit={this.handleSubmit}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              items={this.state.items}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;

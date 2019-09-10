import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Description: {this.props.description}</div>
        <div>Photo: {this.props.photo}</div>
      </div>
    );
  }
}

export default Item;

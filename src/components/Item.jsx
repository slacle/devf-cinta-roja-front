import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="card col-3">
        <img
          src={`https://picsum.photos/id/${this.props.photo}/300/300`}
          className="card-img-top"
          alt="{this.props.name}"
        ></img>
        <div className="card-body">
          <h5 className="card-title">Name: {this.props.name}</h5>
          <p className="card-text">Description: {this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Item;

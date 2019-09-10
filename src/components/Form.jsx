import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <div>Name</div>
          <input type="text" name="name" />
        </div>
        <div>
          <div>Description</div>
          <input type="text" name="description" />
        </div>
        <div>
          <div>Photo</div>
          <input type="text" name="photo" />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Item;

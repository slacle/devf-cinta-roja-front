import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" name="description" />
        </div>
        <div className="form-group">
          <label>Photo</label>
          <input type="text" className="form-control" name="photo" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default Item;

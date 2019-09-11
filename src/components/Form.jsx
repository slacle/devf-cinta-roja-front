import React from "react";

const Item = props => {
  return (
    <form onSubmit={props.handleSubmit}>
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
};

export default Item;

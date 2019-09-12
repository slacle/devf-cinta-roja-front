import React from "react";

const Form = props => {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="mb-5 col-sm-6 col-md-4 col-lg-3"
    >
      <div className="form-group">
        <label>Photo</label>
        <input type="number" className="form-control" name="photo" />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="name" />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea className="form-control" name="description"></textarea>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;

import React from "react";

const Item = props => {
  return (
    <div className="mb-5 col-6 col-sm-12 col-md-6 col-lg-4">
      <div className="card">
        <img
          src={`https://picsum.photos/id/${props.photo}/300/300`}
          className="card-img-top"
          alt="{props.title}"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-sm btn-warning" onClick={props.handleEdit}>
            Edit{" "}
          </button>{" "}
          <button
            className="btn btn-sm btn-danger"
            onClick={props.handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

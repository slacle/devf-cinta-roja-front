import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingItem: false
    };
  }

  handleEditingItem = () => {
    this.setState(previousState => ({
      editingItem: !previousState.editingItem
    }));
  };

  handleEdit = e => {
    e.preventDefault();

    const changedItem = {
      id: this.props.id,
      data: {
        photo: e.target[0].value || this.props.photo,
        title: e.target[1].value || this.props.title,
        description: e.target[2].value || this.props.description
      }
    };

    this.props.handleSave(changedItem);

    this.setState(previousState => ({
      editingItem: !previousState.editingItem
    }));
  };

  render() {
    if (this.state.editingItem) {
      return (
        <div className="mb-5 col-6 col-sm-12 col-md-6 col-lg-4">
          <form className="card" onSubmit={this.handleEdit}>
            <img
              style={{ opacity: "0.3" }}
              src={`https://picsum.photos/id/${this.props.photo}/300/300`}
              className="card-img-top"
              alt="{this.props.title}"
            />
            <div className="card-body">
              <input
                type="number"
                className="form-control mb-3"
                name="photo"
                placeholder={this.props.photo}
              />
              <input
                type="text"
                className="card-title"
                placeholder={this.props.title}
              />
              <textarea
                className="card-text"
                placeholder={this.props.description}
              ></textarea>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-sm btn-warning"
                onClick={this.handleEditingItem}
              >
                Cancel{" "}
              </button>{" "}
              <button className="btn btn-sm btn-primary" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="mb-5 col-6 col-sm-12 col-md-6 col-lg-4">
          <div className="card">
            <img
              src={`https://picsum.photos/id/${this.props.photo}/300/300`}
              className="card-img-top"
              alt="{this.props.title}"
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-sm btn-warning"
                onClick={this.handleEditingItem}
              >
                Edit{" "}
              </button>{" "}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => this.props.handleDelete(this.props.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Item;

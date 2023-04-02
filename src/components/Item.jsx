import React, { Component } from "react";
import axios from "axios";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        photo: this.props.photo,
        title: this.props.title,
        description: this.props.description,
      },
      editedData: {
        photo: this.props.photo,
        title: this.props.title,
        description: this.props.description,
      },
      editingItem: false,
      emptyField: false,
    };
  }

  switchEditMode = () => {
    this.setState((previousState) => ({
      editingItem: !previousState.editingItem,
    }));
  };

  changingPhoto = (e) => {
    this.setState({
      editedData: { ...this.state.editedData, photo: e.target.value },
    });
  };

  changingTitle = (e) => {
    this.setState({
      editedData: { ...this.state.editedData, title: e.target.value },
    });
  };

  changingDescription = (e) => {
    this.setState({
      editedData: { ...this.state.editedData, description: e.target.value },
    });
  };

  saveEdit = (e) => {
    e.preventDefault();

    if (
      this.state.editedData.photo &&
      this.state.editedData.title &&
      this.state.editedData.description
    ) {
      this.setState({
        data: {
          photo: this.state.editedData.photo,
          title: this.state.editedData.title,
          description: this.state.editedData.description,
        },
        emptyField: false,
      });

      axios
        .put(
          `https://devf-cinta-roja-back.onrender.com/api/v1/modify/item/${this.props.id}`,
          this.state.editedData
        )
        .then((res) => console.log(res))
        .catch((error) => console.log(error));

      this.switchEditMode();
    } else {
      this.setState({ emptyField: true });
    }
  };

  render() {
    if (this.state.editingItem) {
      return (
        <div className="mb-5 col-6 col-sm-12 col-md-6 col-lg-4">
          <form className="card" onSubmit={this.saveEdit}>
            <img
              style={{ opacity: "0.75" }}
              src={`https://picsum.photos/id/${this.state.editedData.photo}/300/300`}
              className="card-img-top"
              alt={this.state.editedData.title}
            />
            <div className="card-body">
              <input
                type="number"
                min="0"
                max="1084"
                className="form-control mb-3"
                name="photo"
                value={this.state.editedData.photo}
                onChange={this.changingPhoto}
              />
              <input
                type="text"
                className="card-title"
                value={this.state.editedData.title}
                onChange={this.changingTitle}
              />
              <textarea
                className="card-text"
                value={this.state.editedData.description}
                onChange={this.changingDescription}
              ></textarea>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-sm btn-warning"
                onClick={this.switchEditMode}
              >
                Cancel{" "}
              </button>{" "}
              <button className="btn btn-sm btn-primary" type="submit">
                Save
              </button>
            </div>
          </form>
          {this.state.emptyField && (
            <div className="alert alert-danger py-1 mt-4" role="alert">
              All fields are required.
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="mb-5 col-6 col-sm-12 col-md-6 col-lg-4">
          <div className="card">
            <img
              src={`https://picsum.photos/id/${this.state.data.photo}/300/300`}
              className="card-img-top"
              alt={this.state.data.title}
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.data.title}</h5>
              <p className="card-text">{this.state.data.description}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-sm btn-warning"
                onClick={this.switchEditMode}
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

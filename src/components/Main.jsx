import React, { Component } from "react";
import Item from "./Item";
import Form from "./Form";

class Main extends Component {
  render() {
    return (
      <div className="row">
        <Form
          handleSubmit={this.props.handleSubmit}
          fieldEmpty={this.props.fieldEmpty}
        />
        <div className="col-sm-6 col-md-8 col-lg-9">
          <div className="row">
            {this.props.isLoading ? (
              <div className="p-5">
                <p>Loading...</p>
                <small>
                  The backend of this demo app is running on a free hosting
                  service and takes about 30 seconds to start up.
                </small>
              </div>
            ) : this.props.items.length > 0 ? (
              this.props.items.map((item) => {
                return (
                  <Item
                    key={item._id}
                    id={item._id}
                    title={item.title}
                    description={item.description}
                    photo={item.photo}
                    handleDelete={this.props.handleDelete}
                  />
                );
              })
            ) : (
              <div className="p-5">
                <p>
                  No items currently in the database. Feel free to add some!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

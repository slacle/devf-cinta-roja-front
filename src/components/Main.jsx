import React, { Component } from "react";
import Item from "./Item";
import Form from "./Form";

class Main extends Component {
  render() {
    return (
      <div className="row">
        <Form handleSubmit={this.props.handleSubmit} />
        <div className="col-sm-6 col-md-8 col-lg-9">
          <div className="row">
            {this.props.items.map(item => {
              return (
                <Item
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  description={item.description}
                  photo={item.photo}
                  handleSave={this.props.handleSave}
                  handleDelete={this.props.handleDelete}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

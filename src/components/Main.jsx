import React, { Component } from "react";
import Item from "./Item";
import Form from "./Form";

class Main extends Component {
  render() {
    return (
      <div className="row">
        <Form handleSubmit={this.props.handleSubmit} />
        <div className="col-9">
          <div className="card-deck row">
            {this.props.items.map((item, i) => {
              return (
                <Item
                  key={i}
                  name={item.name}
                  description={item.description}
                  photo={item.photo}
                  handleEdit={this.props.handleEdit}
                  handleDelete={this.props.handleEdit}
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

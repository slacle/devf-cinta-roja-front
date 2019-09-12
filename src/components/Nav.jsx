import React from "react";

const Nav = props => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Items:{" "}
          <span className="badge badge-pill badge-light">
            {props.items.length}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;

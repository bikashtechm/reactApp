import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="mt-2">
        <h4 className="p-1 border-bottom"> SideBar Component</h4>
        <div className="list-group mt-2">
          <NavLink
            to="/dashboard"
            className="list-group-item list-group-item-action"
            activeClassName="active"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/customers"
            className="list-group-item list-group-item-action"
            activeClassName="active"
          >
            Customers
          </NavLink>

          <NavLink
            to="/cart"
            className="list-group-item list-group-item-action"
            activeClassName="active"
          >
            Shopping Card
          </NavLink>
        </div>
      </div>
    );
  }
}

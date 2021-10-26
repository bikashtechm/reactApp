import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import ProductById from "./ProductById";
import NoMatchPage from "./NoMatchPage";
import NavBar from "./NavBar";
import { HashRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import NewCustomer from "./InsertCustomer";
import UpdateCustomer from "./UpdateCustomer";
import Register from "./Registration";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  render() {
    return (
      <HashRouter>
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          updateIsLoggedInStatus={this.updateIsLoggedInStatus}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              {this.state.isLoggedIn ? <Sidebar /> : ""}
            </div>
            <div className="col-lg-9">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Login
                      {...props}
                      updateIsLoggedInStatus={this.updateIsLoggedInStatus}
                    />
                  )}
                />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/customers" exact component={CustomersList} />
                <Route path="/cart" exact component={ShoppingCart} />
                <Route path="/product/:id" component={ProductById} />
                <Route path="/new-customer" exact component={NewCustomer} />
                <Route path="/update-customer/:id" component={UpdateCustomer} />
                <Route path="/register" component={Register} />
                <Route path="" exact component={NoMatchPage} />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn: status });
  };
}

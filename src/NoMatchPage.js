import React, { Component } from "react";

export default class NoMatchPage extends Component {
  render() {
    return <div>404 Page Not found</div>;
  }
  componentDidCatch() {
    document.title = "404 - eCommerce Page Not Found";
  }
}

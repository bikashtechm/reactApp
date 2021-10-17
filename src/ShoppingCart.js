import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 80000, quantity: 15 },
      { id: 2, productName: "Sony Camera", price: 40000, quantity: 10 },
      { id: 3, productName: "Samsung QLED TV", price: 60000, quantity: 13 },
      { id: 4, productName: "iPad Pro", price: 70000, quantity: 12 },
      { id: 5, productName: "xBox", price: 30000, quantity: 43 },
      { id: 6, productName: "Dell Monitor", price: 50000, quantity: 67 },
    ],
  };
  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product key={prod.id} product={prod}>
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 80000, quantity: 0 },
      { id: 2, productName: "Sony Camera", price: 40000, quantity: 0 },
      { id: 3, productName: "Samsung QLED TV", price: 60000, quantity: 0 },
      { id: 4, productName: "iPad Pro", price: 70000, quantity: 0 },
      { id: 5, productName: "xBox", price: 30000, quantity: 0 },
      { id: 6, productName: "Dell Monitor", price: 50000, quantity: 0 },
    ],
  };
  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  // Render method ends here
  handleIncrement = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    allProducts[index].quantity++;
    this.setState({ products: allProducts });
  };
  handleDecrement = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > 0) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };
}

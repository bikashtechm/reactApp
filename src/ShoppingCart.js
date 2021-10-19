import { get } from "jquery";
import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
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
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    // fetch data from DataBase - API Calls
    var responseData = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await responseData.json();
    this.setState({ products: prods });
  };

  componentDidUpdate(prevProps, prevState) {
    // calls when there is state update
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
  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (window.confirm("Are you sure to Delete")) {
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}

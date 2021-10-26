import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CustomersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "Customers",
      customersCount: 225,
      customers: [],
    };
  }

  render() {
    return (
      <React.Fragment>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <Link to="/new-customer" className="btn btn-primary">
            New Customer
          </Link>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone No</th>
              <th>City</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </React.Fragment>
    );
  }

  componentDidMount = async () => {
    document.title = "Customers Lists";
    var responseData = await fetch("http://localhost:5000/customers", {
      method: "GET",
    });
    // success code between 200-299
    if (responseData.ok) {
      var custs = await responseData.json();
      this.setState({ customers: custs, customersCount: custs.length });
    } else {
      console.log("Error - " + responseData.status);
    }
  };

  getPhoneToRender = (customerPhn) => {
    if (customerPhn) {
      return customerPhn;
    } else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt={cust.photo} />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePicClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
          <td>
            <Link to={`/update-customer/${cust.id}`} className="btn btn-info">
              Edit
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.onClickDelete(cust.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  onChangePicClick = (custDetails, index) => {
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/1020/60";
    this.setState({ customers: custArr });
  };

  onClickDelete = async (id) => {
    if (window.confirm("Are you sure to Delete")) {
      var responseData = await fetch(`http://localhost:5000/customers/${id}`, {
        method: "DELETE",
      });
      var custcomer = await responseData.json();
      if (custcomer.ok) {
        var allCustomers = [...this.state.customers];
        allCustomers = allCustomers.filter((cust) => {
          return custcomer.id !== id;
        });
        this.setState({ customers: allCustomers });
      }
    }
  };
}

import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 225,
    customers: [
      {
        id: 1,
        name: "Bikash Shaw",
        phone: "9096028231",
        address: { city: "Kolkata" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Saraswati Kumari",
        phone: null,
        address: { city: "Delhi" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Aarav Shaw",
        phone: "9098789876",
        address: { city: "Chennai" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Shyam Jadav",
        phone: "4564323456",
        address: { city: "Mumbai" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Raman Siddhi",
        phone: null,
        address: { city: "Pune" },
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone No</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getTableRows()}</tbody>
        </table>
      </React.Fragment>
    );
  }

  //Executes if user clicks on Refresh Button
  onRefreshClick = () => {
    this.setState({
      customersCount: 1000,
    });
  };

  getPhoneToRender = (customerPhn) => {
    if (customerPhn) {
      return customerPhn;
    } else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getTableRows = () => {
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
        </tr>
      );
    });
  };

  onChangePicClick = (custDetails, index) => {
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/1020/60";
    this.setState({ customers: custArr });
  };
}

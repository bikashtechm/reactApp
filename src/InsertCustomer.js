import React, { Component } from "react";

class NewCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      phone: "",
      photo: "",
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-9 mx-auto">
          <form>
            <h4 className="p-2 border-bottom">New Customer</h4>
            {/* Customer Name Starts */}
            <div className="form-group form-row">
              <label className="col-lg-4">Customer Name</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            {/* Customer Name Ends */}

            {/* City Name Starts */}
            <div className="form-group form-row">
              <label className="col-lg-4">City</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.city}
                  onChange={(event) => {
                    this.setState({ city: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            {/* City Name Ends */}

            {/* Phone Starts */}
            <div className="form-group form-row">
              <label className="col-lg-4">Phone</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.phone}
                  onChange={(event) => {
                    this.setState({ phone: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            {/* Phone Ends */}

            {/* Photo Starts */}
            <div className="form-group form-row">
              <label className="col-lg-4">Photo</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.photo}
                  onChange={(event) => {
                    this.setState({ photo: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            {/* Photo Ends */}

            <div className="border-top p-2">
              <button className="btn btn-success" onClick={this.onSaveClicked}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onSaveClicked = async (event) => {
    event.preventDefault();
    var customerObj = {
      name: this.state.name,
      address: { city: this.state.city },
      phone: this.state.phone,
      photo: this.state.photo,
    };
    var responseData = await fetch("http://localhost:5000/customers", {
      method: "POST",
      body: JSON.stringify(customerObj),
      headers: {
        "Content-type": "application/json",
      },
    });
    var custs = await responseData.json();
    if (custs) {
      this.props.history.replace("/customers");
    }
  };
}

export default NewCustomer;

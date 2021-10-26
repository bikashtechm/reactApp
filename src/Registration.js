import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fullName: "",
      dateOfBirth: "",
      gender: "male",
      controls: ["email", "password", "fullName", "dateOfBirth", "gender"],
      errors: {
        email: [],
        password: [],
        fullName: [],
        dateOfBirth: [],
        gender: [],
      },
      message: "",
      dirty: {
        email: false,
        password: false,
        fullName: false,
        dateOfBirth: false,
        gender: false,
      },
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-9 mx-auto">
          <h1>Register</h1>

          {/* email starts  */}
          <div className="form-group form-row">
            <label className="col-lg-4 col-form-label" htmlFor="email">
              Email
            </label>
            <div className="col-lg-8">
              <input
                type="text"
                id="email"
                autoFocus="autofocus"
                className="form-control"
                value={this.state.email}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.email = true;
                  this.setState(
                    { email: event.target.value, dirty: dirty },
                    this.validate
                  );
                }}
                onBlur={(event) => {
                  let dirty = this.state.dirty;
                  dirty.email = true;
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />
            </div>
          </div>
          {/* email ends */}

          {/* password starts  */}
          <div className="form-group form-row">
            <label className="col-lg-4 col-form-label" htmlFor="password">
              Password
            </label>
            <div className="col-lg-8">
              <input
                type="password"
                id="password"
                className="form-control"
                value={this.state.password}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.password = true;
                  this.setState(
                    { password: event.target.value, dirty: dirty },
                    this.validate
                  );
                }}
                onBlur={(event) => {
                  let dirty = this.state.dirty;
                  dirty.password = true;
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />
            </div>
          </div>
          {/* password ends */}

          {/* fullName starts  */}
          <div className="form-group form-row">
            <label className="col-lg-4 col-form-label" htmlFor="fullName">
              Full Name
            </label>
            <div className="col-lg-8">
              <input
                type="text"
                id="fullName"
                className="form-control"
                value={this.state.fullName}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.fullName = true;
                  this.setState(
                    { fullName: event.target.value },
                    this.validate
                  );
                }}
                onBlur={(event) => {
                  let dirty = this.state.dirty;
                  dirty.fullName = true;
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />
            </div>
          </div>
          {/* fullName ends */}

          {/* dateOfBirth starts  */}
          <div className="form-group form-row">
            <label className="col-lg-4 col-form-label" htmlFor="dateOfBirth">
              Date Of Birth
            </label>
            <div className="col-lg-8">
              <input
                type="date"
                id="dateOfBirth"
                className="form-control"
                value={this.state.dateOfBirth}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.dateOfBirth = true;
                  this.setState(
                    { dateOfBirth: event.target.value, dirty: dirty },
                    this.validate
                  );
                }}
                onBlur={(event) => {
                  let dirty = this.state.dirty;
                  dirty.dateOfBirth = true;
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />
            </div>
          </div>
          {/* dateOfBirth ends */}

          {/* gender starts  */}
          <div className="form-group form-row">
            <label className="col-lg-4">Gender</label>
            <div className="col-lg-8">
              <div className="form-check">
                <input
                  type="radio"
                  id="male"
                  className="form-check-input"
                  name="gender"
                  value="male"
                  checked={this.state.gender === "male" ? true : false}
                  onChange={(event) => {
                    let dirty = this.state.dirty;
                    dirty.gender = true;
                    this.setState({
                      gender: event.target.value,
                      dirty: dirty,
                    });
                  }}
                />
                Male
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="female"
                  className="form-check-input"
                  name="gender"
                  value="female"
                  checked={this.state.gender === "female" ? true : false}
                  onChange={(event) => {
                    let dirty = this.state.dirty;
                    dirty.gender = true;
                    this.setState({
                      gender: event.target.value,
                      dirty: dirty,
                    });
                  }}
                />
                Female
              </div>
            </div>
          </div>
          {/* gender ends */}

          <div className="row">
            <div className="col-lg-12">
              <div className="text-right">
                <button
                  className="btn btn-success m-2"
                  onClick={this.onRegisterClick}
                >
                  Register
                </button>
              </div>
              <ul className="text-danger">
                {Object.keys(this.state.errors).map((control) => {
                  if (this.state.dirty[control]) {
                    return this.state.errors[control].map((err) => {
                      return <li key={err}>{err}</li>;
                    });
                  } else {
                    return "";
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } // end of render

  validate = () => {
    const validEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const validPasswordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/;
    let errors = {};
    // reads each controls from 'control' array of state
    this.state.controls.forEach((control) => {
      errors[control] = [];
      switch (control) {
        case "email":
          // email cannot be blank
          if (!this.state[control]) {
            errors[control].push("Email cannot be blank");
          }
          // check email regex
          if (this.state.email) {
            if (!validEmailRegex.test(this.state[control])) {
              errors[control].push("Invalid Email Address");
            }
          }
          break;

        case "password":
          // password cannot be blank
          if (!this.state[control]) {
            errors[control].push("Password cannot be blank");
          }
          // check password regex
          if (this.state.password) {
            if (!validPasswordRegex.test(this.state[control])) {
              errors[control]
                .push(`Password should be between 6-15 characters long 
              with at least one uppercase letter, 
              one lowecase letter and one digit`);
            }
          }
          break;

        case "fullName":
          // fullName cannot be blank
          if (!this.state[control]) {
            errors[control].push("FullName cannot be blank");
          }
          break;

        case "dateOfBirth":
          // dateOfBirth cannot be blank
          if (!this.state[control]) {
            errors[control].push("Date Of Birth cannot be blank");
          }

          if (this.state[control]) {
            // dateOfBirth should be 18 years older
            let dob = new Date(this.state[control]).getTime();
            let today = new Date().getTime();
            if (today - 18 * 365.25 * 24 * 60 * 60 * 1000 < dob) {
              errors[control].push("Minimum age is 18 years");
            }
          }

          break;

        default:
          break;
      }
    });

    //set errors
    this.setState({ errors });
  };

  isValid = () => {
    let valid = true;
    for (let control in this.state.errors) {
      if (control.length > 0) {
        valid = false;
      }
    }
    return valid;
  };

  // Invoke when user clicks on Register button
  onRegisterClick = () => {
    let dirty = this.state.dirty;
    Object.keys(dirty).forEach((control) => {
      dirty[control] = true;
    });
    this.setState({ dirty: dirty });
    this.validate();
    if (this.isValid()) {
      this.setState({ message: "Valid" });
    } else {
      this.setState({ message: "Invalid" });
    }
  };
}

export default Register;

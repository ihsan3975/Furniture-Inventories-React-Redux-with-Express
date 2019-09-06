import React, { Component } from "react";
import API from "../axios/Api";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export class Register extends Component {
  state = {
    full_name: "",
    email: "",
    password: ""
    // date_added: ""
  };

  handlerChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async () => {
    // var JWTToken = localStorage.getItem("auth");
    window.event.preventDefault();
    await API.post("/register", this.state);
    console.log(this.state);

    confirmAlert({
      title: "Register Success",
      message: "Wanna Access Products?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            this.props.history.push("/login");
          }
        },
        {
          label: "No",
          onClick: () => {
            this.props.history.push("/home");
          }
        }
      ]
    });
    // this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <h2>Register</h2>

        <form onSubmit={this.handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>
                  <input
                    type="text"
                    name="full_name"
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="text"
                    name="email"
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default Register;

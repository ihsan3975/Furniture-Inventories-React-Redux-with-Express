import React, { Component } from "react";
import API from "../axios/Api";
// import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    token: ""
  };

  handlerChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async () => {
    window.event.preventDefault();
    await API.post("/login", this.state).then(response =>
      this.setState({
        token: response.data.token
      })
    );
    console.log(this.state.token);

    localStorage.setItem("auth", this.state.token);
    // console.log(token);
    if (localStorage.getItem("auth") === "undefined") {
      confirmAlert({
        title: "Access Denied!",
        message: "Login Again?",
        buttons: [
          {
            label: "Yes",
            onClick: () => {}
          },
          {
            label: "No",
            onClick: () => {
              this.props.history.push("/home");
            }
          }
        ]
      });
    } else {
      this.props.history.push("/products");
    }
  };

  render() {
    return (
      <div className="container">
        <h2>Login</h2>

        <form onSubmit={this.handlerSubmit}>
          <table>
            <tbody>
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
                    value="Login"
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

export default Login;

import React, { Component } from "react";
import API from "../axios/Api";
// import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {login} from '../publics/actions/users'
import {connect} from 'react-redux'
import logo from '../img/loginundraw.svg'
// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

export class Login extends Component {
  state = {
    email: "",
    password: ""
    // token: ""
  };

  handlerChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async () => {
    window.event.preventDefault();
    await this.props.dispatch(login(this.state))
      this.setState({
        token: this.props.users.usersProfile
      })
      // console.log(this.props.users.usersProfile)

    localStorage.setItem("token", this.props.users.token.data.token);
    if (localStorage.getItem("token") === 'undefined') {
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
      // window.location.replace('/products')
    }
  };

  render() {
    return (
      
      <div className="container" style={{textAlign:'center'}}>
        <h2 style={{textAlign:'center', paddingLeft:'50px'}}>Login</h2>
        <img id="logo" src={logo} ></img>

        <br></br>
        <form onSubmit={this.handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    onChange={this.handlerChange}
                    required
                  />
                </td>
              </tr>
              <br></br>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={this.handlerChange}
                    required
                  />
                </td>
              </tr>
              <br></br>
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

const mapStateToProps = state => {
  return{
    users: state.users
  }
}

export default connect(mapStateToProps)(Login);

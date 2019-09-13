import React, { Component } from "react";
import API from "../axios/Api";
import {register} from '../publics/actions/users' 
import {connect} from 'react-redux'
import logo from '../img/register.svg'

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
    window.event.preventDefault();
    await this.props.dispatch(register(this.state))
    // await API.post("/register", this.state);
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
      <div className="container" style={{textAlign:'center'}}>
        <h2 style={{textAlign:'center', paddingLeft:'50px'}}>Register</h2>
        <img id="logo" src={logo} ></img>

        <br></br>
        <form onSubmit={this.handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>
                  <input
                    type="text"
                    name="full_name"
                    className='form-control'
                    onChange={this.handlerChange}
                    required
                  />
                </td>
              </tr>
              <br></br>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="text"
                    name="email"
                    className='form-control'
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
                    className='form-control'
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

const mapStateToProps = state => {
  return{
    users: state.users
  }
}

export default connect (mapStateToProps)(Register);

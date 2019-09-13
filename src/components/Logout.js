import React, { Component } from "react";
import API from "../axios/Api";
// import axios from "axios";
import logo from '../img/logout.svg'

export class Logout extends Component {
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

    localStorage.setItem("token", this.state.token);
    // console.log(token);
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="container" style={{textAlign:'center'}}>
        <h2 style={{textAlign:'center', paddingLeft:'50px'}}>Are you Sure?</h2>
        <img id="logo" src={logo} ></img>

        <br></br>
        <form onSubmit={this.handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input
                    type="submit"
                    value="Yes"
                    className="btn btn-warning"
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

export default Logout;

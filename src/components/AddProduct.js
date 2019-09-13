import React, { Component } from "react";
import API from "../axios/Api";
// import Header from "./Header";
import {connect} from 'react-redux'
import {addProduct} from '../publics/actions/products' 
import {Spinner, Container} from 'react-bootstrap'
import logo from '../img/defimg.svg'

export class AddProduct extends Component {
  state = {
    name: "",
    description: "",
    image: "",
    id_category: "",
    quantity: ""
    // date_added: ""
  };

  handlerChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async () => {
    window.event.preventDefault();
    await this.props.dispatch(addProduct(this.state))
    this.props.history.push("/products");
  };

  render() {
    return (
      this.props.products.isLoading ? 
      <Container>
        <Spinner animation="border" style={{position:'absolute', left:'50%', top: '35%'}} />
      </Container>
      :
      <div className="container" style={{textAlign:'center'}}>
        <h2 style={{textAlign:'center', paddingLeft:'50px'}}>Login</h2>
        <img id="logo" src={logo} ></img>

        <br></br>
        <form onSubmit={this.handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <select
                    id="list"
                    name="description"
                    value={this.state.description}
                    className="form-control"
                    onChange={this.handlerChange}
                  >
                    <option value="">----- Description -----</option>
                    <option value="Registered">Registered</option>
                    <option value="Unregistered">Unregistered</option>
                    <option value="In Process">In Process</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Image</td>
                <td>
                  <input
                    type="text"
                    name="image"
                    className="form-control"
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Category</td>
                <td>
                  <select
                    id="list"
                    name="id_category"
                    className="form-control"
                    onChange={this.handlerChange}
                  >
                    <option value="">----- Category -----</option>
                    <option value="1" name="id_category">
                      Bed
                    </option>
                    <option value="2" name="id_category">
                      Sofa
                    </option>
                    <option value="3" name="id_category">
                      Chest
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>
                  <input
                    type="text"
                    name="quantity"
                    className="form-control"
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    type="submit"
                    value="Add"
                    // className="form-control"
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
    products: state.products
  }
}

export default connect (mapStateToProps)(AddProduct);

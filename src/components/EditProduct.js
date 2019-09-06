import React, { Component } from "react";
// import API from "../axios/Api";
import axios from "axios";

export class EditProduct extends Component {
  state = {
    name: "",
    description: "",
    image: "",
    id_category: "",
    quantity: "",
    date_added: ""
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    await axios.get("/products/" + id).then(res =>
      this.setState({
        name: res.data.data[0]["name"],
        description: res.data.data[0]["description"],
        image: res.data.data[0]["image"],
        id_category: res.data.data[0]["id_category"],
        quantity: res.data.data[0]["quantity"],
        date_added: res.data.data[0]["date_added"]
      })
    );
    console.log(this.state);
  }

  handlerChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async () => {
    var JWTToken = localStorage.getItem("auth");
    const id = this.props.match.params.id;
    window.event.preventDefault();
    await axios.put("/products/users/" + id, this.state, {
      headers: { auth: `${JWTToken}` }
    });
    this.props.history.push("/products");
  };

  render() {
    return (
      <div className="container">
        <h2>Edit Product</h2>

        <form onSubmit={this.handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
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
                    value={this.state.image}
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
                    value={this.state.id_category}
                    className="form-control"
                    onChange={this.handlerChange}
                  >
                    <option value="">----- Category -----</option>
                    <option value="1">Bed</option>
                    <option value="2">Sofa</option>
                    <option value="3">Chest</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>
                  <input
                    type="text"
                    name="quantity"
                    value={this.state.quantity}
                    className="form-control"
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Date Added</td>
                <td>
                  <input
                    type="text"
                    name="date_added"
                    value={this.state.date_added}
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
                    value="Edit"
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

export default EditProduct;

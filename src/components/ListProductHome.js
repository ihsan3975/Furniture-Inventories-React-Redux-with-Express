import React, { Component } from "react";
import axios from "axios";
import CardProductHome from "./CardProductHome";
import "../img/style.css";

export class ListProduct extends Component {
  state = {
    product: [],
    query: {
      sort: "asc",
      sortBy: "name",
      limit: 9,
      page: 1
    }
  };

  componentDidMount = async () => {
    const { sort, sortBy, limit, page } = this.state.query;
    await axios
      .get(
        `/products?sort=${sort}&sortBy=${sortBy}&limit=${limit}&page=${page}`
      )
      .then(response =>
        this.setState({
          product: response.data.data
        })
      );
    console.log(this.state);
  };

  render() {
    const renderData = this.state.product.map(product => {
      return (
        <CardProductHome
          product={product}
          key={product.id}
          s
          refresh={this.componentDidMount}
        />
      );
    });

    return (
      <div className="container">
        <div className="card-title">
          <div className="">{renderData}</div>
        </div>
      </div>
    );
  }
}

export default ListProduct;

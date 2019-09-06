import React from "react";
import { Link } from "react-router-dom";
// import API from "../axios/Api";

import "react-confirm-alert/src/react-confirm-alert.css";

function CardProductHome({ product }) {
  return (
    <div className="col-md-12 card" style={{ margin: 2 }}>
      <img src={product.image} />
      <h3>{product.name}</h3>
      <small>Quantity: {product.quantity}</small>
      <p>Category: {product.category}</p>
      <hr />
      <br />
    </div>
  );
}

export default CardProductHome;

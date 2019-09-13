import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../img/errorImage.svg";
// import API from "../axios/Api";

import "react-confirm-alert/src/react-confirm-alert.css";

function CardProductHome({ product, defimg }) {
  return (
    <div className="col-md-12 card" style={{ margin: 2 }}>
      <img src={product.image} onError={() => {
        product.image='https://cdn.dribbble.com/users/175710/screenshots/3628199/dribbble-setapp-cat-02.png';
        defimg()
      }} />
      <h3>{product.name}</h3>
      <small>Quantity: {product.quantity}</small>
      <p>Category: {product.category}</p>
      <hr />
      <br />
    </div>
  );
}

export default CardProductHome;

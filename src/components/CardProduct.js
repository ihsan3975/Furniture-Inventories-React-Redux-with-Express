import React from "react";
import { Link } from "react-router-dom";
import API from "../axios/Api";

import "../img/style.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function CardProduct({ product , refresh, defimg}) {
  var JWTToken = localStorage.getItem("token");
  async function deleteProduct() {
    window.event.preventDefault();
    await API.delete("/products/users/" + product.id, {
      headers: { auth: `${JWTToken}` }
    });
    // await API.delete("/products/users/" + product.id);

    return refresh();
  }

  async function addQuantity() {
    var JWTToken = localStorage.getItem("token");
    window.event.preventDefault();
    await API.patch("/products/qty/add/1/" + product.id, {
      headers: { auth: `${JWTToken}` }
    });
    return refresh();
  }

  async function reduceQuantity() {
    var JWTToken = localStorage.getItem("token");
    window.event.preventDefault();
    await API.patch("/products/qty/reduce/1/" + product.id, {
      headers: { auth: `${JWTToken}` }
    });
    return refresh();
  }

  function deleteConfirm() {
    confirmAlert({
      title: "Furniture Inventory",
      message: "Are you sure delete " + product.name + " ?",
      buttons: [
        {
          label: "Yes, Delete",
          onClick: () => deleteProduct()
        },
        {
          label: "No",
          onClick: () => {}
        }
      ]
    });
  }

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
      <div className="row" style={{ margin: 3 }}>
        <Link to={"/edit/" + product.id} style={{ margin: 2 }}>
          <input type="submit" value="Edit" className="btnku btn-primary" />
        </Link>
        <Link onClick={deleteConfirm} style={{ margin: 2 }}>
          <input type="submit" value="Delete" className="btnku btn-danger" />
        </Link>
        <Link onClick={addQuantity} style={{ margin: 2 }}>
          <input type="submit" value="Add" className="btnadd btn-success" />
        </Link>
        <Link onClick={reduceQuantity} style={{ margin: 2 }}>
          <input type="submit" value="Min" className="btnadd btn-info" />
        </Link>
      </div>
      <br />
    </div>
  );
}

export default CardProduct;

import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const { name, description, price, quantity, supplier, img } = item;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="items-container card p-0">
        <img className="item-img" src={img} alt="" srcset="" />
        <div className="card-body">
          <h5 className="fw-bold">{name}</h5>
          <p className="">{description}</p>
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold">{price}$</h5>
            <p><small>Product Stock : {quantity}p</small></p>
            <p><small>Seller : {supplier}</small></p>
          </div>
        </div>
        <Link
          className="btn-update text-decoration-none text-white"
          to="/checkout"
        >
          Update
        </Link>
      </div>
    </div>
  );
};

export default Item;

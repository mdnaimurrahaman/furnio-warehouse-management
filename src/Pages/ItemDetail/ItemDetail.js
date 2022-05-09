import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./ItemDetail.css";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `https://peaceful-beyond-14881.herokuapp.com/item/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [itemId, item]);

  // quantity operations
  const handleDelivered = (e) => {
    e.preventDefault();
    let quantity = item?.quantity;
    quantity = parseInt(quantity) - 1;
    if (quantity < 0) {
      return alert("Quantity can not be less then zero");
    }

    const url = `https://peaceful-beyond-14881.herokuapp.com/quantity/${itemId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        setItem({ ...data, quantity: quantity });
        toast("Successfully Delivered");
      });
  };

  //Add quantity
  const handleUpdateQuantity = (e) => {
    e.preventDefault();
    let quantity = item?.quantity;
    const addQuantity = parseInt(e.target.quantity.value);
    if (addQuantity > 0) {
      quantity = parseInt(quantity) + addQuantity;
      const updateInventory = { quantity };
      const url = `https://peaceful-beyond-14881.herokuapp.com/quantity/${itemId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateInventory),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("quantity Updated");
          e.target.reset();
        });
    } else {
      alert("Please insert positive number of quantity");
      e.target.reset();
      return;
    }
  };

  return (
    <div className="container">
      <div className="items-container detail-container mt-5 card p-0">
        <img className="detail-img" src={item.img} alt="" srcset="" />
        <div className="detail-info">
          <h5 className="fw-bold">{item.name}</h5>
          <p className="">{item.description}</p>
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold">{item.price}$</h5>
            <p>
              <small>Product Stock : {item.quantity}p</small>
            </p>
            <p>
              <small>Seller : {item.supplier}</small>
            </p>
          </div>
          <form onSubmit={handleUpdateQuantity} className="mb-3 d-flex ">
            <input
              className=""
              type="number"
              name="quantity"
              placeholder="Your Quantity"
            />
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <button
            onClick={handleDelivered}
            className="btn-update text-decoration-none text-white"
          >
            Delivered
          </button>
          <p className="text-center mt-3">
            warehouse{" "}
            <Link
              className="sign-link fw-bold pe-auto text-decoration-none"
              to="/manageItems"
            >
              manage Inventories
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

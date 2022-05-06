import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemDetail.css'

const ItemDetail = () => {
    const {itemId} = useParams();
    const [item, setItem] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/item/${itemId}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setItem(data));
    },[])
    return (
        <div className="container">
      <div className="items-container detail-container mt-5 card p-0">
        <img className="detail-img" src={item.img} alt="" srcset="" />
        <div className="detail-info">
          <h5 className="fw-bold">{item.name}</h5>
          <p className="">{item.description}</p>
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold">{item.price}$</h5>
            <p><small>Product Stock : {item.quantity}p</small></p>
            <p><small>Seller : {item.supplier}</small></p>
          </div>
          <div className='mb-3 d-flex '>
              <input className='' type="number" placeholder='Your Quantity' />
              <button className='add-btn'>Add</button>
          </div>
          <button
          className="btn-update text-decoration-none text-white">
          Delivered
        </button>
        <p className='text-center mt-3'>warehouse <Link className='sign-link fw-bold pe-auto text-decoration-none' to="/signup">manage Inventories</Link></p>
        </div>
      </div>
    </div>
    );
};

export default ItemDetail;
import React from 'react';
import './Item.css'

const Item = ({item}) => {
    const {name,description,price,quantity,supplier,img} = item;
    return (
        <div className=''>
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <h5 className='fw-bold'>{name}</h5>
            <p><span>{description}</span></p>
            <div className='d-flex justify-content-between'>
                <h5>{price}$</h5>
                <p>{quantity}</p>
            </div>
            <p>Seller : {supplier}</p>
        </div>
    );
};

export default Item;
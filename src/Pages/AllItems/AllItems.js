import React from 'react';
import './AllITems.css'

const AllItems = ({item}) => {
    const {_id, name, description, price, quantity, supplier, img } = item;
    return (
        <div className='d-flex align-items-center justify-content-center allItem-info'>
            <div className='items-img'>
                <img className='' src={img} alt="" srcset="" />
            </div>
            <div>
                <h5 className='fw-bold'>{name}</h5>
                <div className='d-flex align-items-center justify-content-center'>
                    <h5>{price}$</h5>
                    <button>Dilate</button>
                </div>
            </div>
        </div>
    );
};

export default AllItems;
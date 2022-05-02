import React from 'react';
import './Item.css'

const Item = ({item}) => {
    const {name,description,price,quantity,supplier,img} = item;
    return (
        <div>
            <h1>This is item:{name}</h1>
        </div>
    );
};

export default Item;
import React, { useEffect, useState } from 'react';
import Item from '../Home/Item/Item';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
        .then(res => res.json())
        .then(data => setItems(data));
    },[])

    return (
        <div>
            <h2>Items: {items.length}</h2>
            {
                items.map(item => <Item key={item._id} item={item}></Item>)
            }
        </div>
    );
};

export default Items;
import React, { useEffect, useState } from 'react';
import Item from '../Home/Item/Item';
import './Items.css'

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
        .then(res => res.json())
        .then(data => setItems(data));
    },[])

    return (
        <div>
            <div className='container'>
                <div className=' row items-section'>
                    {
                        items.map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;
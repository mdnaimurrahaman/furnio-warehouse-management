import React, { useEffect, useState } from 'react';
import useItems from '../../../Hooks/useItems';
// import Item from '../Home/Item/Item';
import Item from '../Item/Item'
import './Items.css'

const Items = () => {

    const [items, setItems] = useItems();

    return (
        <div>
            <div className='container'>
                <div className=' row items-section'>
                    {
                        items.slice(0,6).map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;
import React from 'react';
import useItems from '../../Hooks/useItems';
import AllItems from '../AllItems/AllItems';
import './ManageItems.css'

const ManageItems = () => {
    const [items, setItems] = useItems();

    return (
        <div>
            <div className='container'>
                <div className='AllItems-section mt-5'>
                    {
                        items.map(item => <AllItems key={item._id} item={item}></AllItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
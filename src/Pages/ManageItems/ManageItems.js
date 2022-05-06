import React from 'react';
import { Link } from 'react-router-dom';
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
                <div className='add-btn d-flex justify-content-center mt-4'>
                    <Link className='text-white fw-bold pe-auto text-decoration-none' to="/addItems"><button className='text-center mt-3'>Add Items</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;


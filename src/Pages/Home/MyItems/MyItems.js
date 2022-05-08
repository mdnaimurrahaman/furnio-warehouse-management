import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './MyItems.css'

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])

    useEffect(()=>{
        const email = user.email
        const url = `http://localhost:5000/item?email=${email}`;
        fetch (url, {
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
              },
        })
        .then(res => res.json())
        .then(data => setMyItems(data))
    },[user.email])

    return (
        <div>
            <h1>This is my items: {myItems.length}</h1>
            <ol>
                {
                    myItems.map(item => <li>{item.name}</li>)
                }
            </ol>
        </div>
    );
};

export default MyItems;
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [ orders, setOrders ] = useState([]);
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);


    useEffect( () => {
        fetch('http://localhost:4000/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])


    console.log(orders);
    return (
        <div>
            <h1> Hello, You have {orders.length} orders</h1>
            {
                orders.map(order => <li>Book Name:{order.boughtBook.name} And the Price is: ${order.boughtBook.price}</li>)
            }
        </div>
    );
};

export default Order;
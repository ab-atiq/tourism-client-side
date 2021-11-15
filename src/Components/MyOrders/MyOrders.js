import React, { useEffect, useState } from 'react';
import SubMyOrders from './SubMyOrders';
import './MyOrders.css';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://scary-vampire-35450.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <div className='container py-3'>
            <h1 className='text-primary'>My Orders</h1>
            <div className='order-container'>
                {
                    orders.map(order => <SubMyOrders key={order._id} order={order} orders={orders} setOrders={setOrders} ></SubMyOrders>)
                }
            </div>
        </div>
    );
};

export default MyOrders;
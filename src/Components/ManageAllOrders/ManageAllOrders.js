import React, { useEffect, useState } from 'react';
import SubManageAllOrders from './SubManageAllOrders';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://scary-vampire-35450.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <div className='container py-3'>
            <h1 className='text-primary'>All Orders</h1>
            <div className='order-container'>
                {
                    orders.map(order => <SubManageAllOrders key={order._id} order={order} orders={orders} setOrders={setOrders} ></SubManageAllOrders>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;
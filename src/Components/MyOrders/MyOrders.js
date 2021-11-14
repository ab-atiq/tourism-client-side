import React, { useEffect, useState } from 'react';
import SubMyOrders from './SubMyOrders';

const MyOrders = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className='container'>
            <h1>My Orders</h1>
            <div className='order-container'>
                {
                    products.map(product => <SubMyOrders key={product._id} product={product} products={products} setProducts={setProducts} ></SubMyOrders>)
                }
            </div>
        </div>
    );
};

export default MyOrders;
import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const SubMyOrders = ({ order, orders, setOrders }) => {
    const { _id, title, image } = order;
    const {user}=useAuth();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://scary-vampire-35450.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully.');
                        const remainingOrders = orders.filter(product => product._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <div className='sub-order-container'>
            <h2>{title}</h2>
            <img className='img-fluid my-4' src={image} alt="" />
            <br/>
            <h6>Email:{user.email}</h6>
            <Button onClick={() => handleDelete(_id)}>Delete</Button>
        </div>
    );
};

export default SubMyOrders;
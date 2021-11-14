import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './BookPlace.css';

const BookPlace = () => {
    const { user } = useAuth();
    const { accommodationId } = useParams();
    const [accomodation, setAccomodation] = useState({});
    // accomodation id can not get first
    const initialInfo = { accommodationId: accomodation?._id, buyerName: user.displayName, email: user.email, phone: '' };
    // const initialInfo = { buyerName: user.displayName };
    console.log(initialInfo);
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

    useEffect(() => {
        fetch('http://localhost:5000/accommodations')
            .then(res => res.json())
            .then(data => {
                const matchedProduct = data.find(sinPro => sinPro._id === accommodationId)
                setAccomodation(matchedProduct)
            });
    }, []);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setPurchaseInfo(newInfo);
    }

    const handlePurchaseSubmit = e => {
        const information = { ...purchaseInfo };
        console.log(information);
        // send to the server
        fetch('http://localhost:5000/buyers', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(information)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Information successfully submitted.!');
                    e.target.reset();
                }
            })

        e.preventDefault();
    }

    return (
        <div className='container book-place'>
            <h2>Please, Booking this item</h2>
            <h1>{accomodation?.title}</h1>
            <img style={{ width: '200px' }} src={accomodation?.image} alt="" />
            <form onSubmit={handlePurchaseSubmit}>
                <label>Accommodation ID:</label>
                <input type="text" onBlur={handleOnBlur} defaultValue={accomodation?._id} name='accommodationId' disabled />
                <label>Name:</label>
                <input type="text" onBlur={handleOnBlur} defaultValue={user.displayName} name='buyerName' />
                <label>Email:</label>
                <input type="email" defaultValue={user.email} onBlur={handleOnBlur} name='email' />
                <label>Number:</label>
                <input type="number" placeholder='Phone Number' name='phone' onBlur={handleOnBlur} />
                <label>Address:</label>
                <textarea placeholder="Give your details Information" id="" cols="10" rows="5" name='address' onBlur={handleOnBlur}></textarea>
                <input style={{ width: '160px' }} className='btn btn-primary' type="submit" value="Submit Information" />
            </form>
        </div>
    );
};

export default BookPlace;
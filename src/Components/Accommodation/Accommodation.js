import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Accommodation.css'

const Accommodation = () => {
    const [accommodations, setAccommodations] = useState([]);
    useEffect(() => {
        fetch('https://scary-vampire-35450.herokuapp.com/accommodations')
            .then(res => res.json())
            .then(data => setAccommodations(data))
    }, [])
    return (
        <div className='container-fluid p-3'>
            <h1 className='text-primary'>Best Accommodation section.</h1>
            <h2>Total Accommodation: {accommodations.length}</h2>
            <div className="accommodation-container">
                {
                    accommodations.map(acco => <SingleAccommodation key={acco._id} accommodation={acco}></SingleAccommodation>)
                }
            </div>
        </div>
    );
};

const SingleAccommodation = (props) => {
    const { _id, acc_id, title, image, description } = props.accommodation;
    return (
        <div className='single-accommodation'>
            <h2>Imformation About {acc_id}</h2>
            <h1>{title}</h1>
            <img className='img-fluid' src={image} alt="" />
            <h6>{description}</h6>
            <Link to={`/bookPlace/${_id}`}><Button>Book Now</Button></Link>
        </div>
    );
}

export default Accommodation;
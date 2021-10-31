import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Accommodation.css'
const Accommodation = () => {
    const [accommodations, setAccommodations] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/accommodations')
            .then(res => res.json())
            .then(data => setAccommodations(data))
    }, [])
    return (
        <div className='container-fluid p-3'>
            <h1 className='text-primary'>This is Accommodation section.</h1>
            <h2>Total Accommodation: {accommodations.length} </h2>
            <div className="accommodation-container">
                {
                    accommodations.map(acco => <SingleAccommodation key={acco._id} accommodation={acco}></SingleAccommodation>)
                }
            </div>
        </div>
    );
};

const SingleAccommodation = (props) => {
    const { acc_id, title, image, description } = props.accommodation;
    return (
        <div className='single-accommodation'>
            <h2>Imformation About {acc_id}</h2>
            <h1>{title}</h1>
            <img className='img-fluid' src={image} alt="" />
            <h6>{description}</h6>
            <Button>Add to Rest</Button>
        </div>
    );
}

export default Accommodation;
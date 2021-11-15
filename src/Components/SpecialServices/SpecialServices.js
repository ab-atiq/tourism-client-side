import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const SpecialServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://scary-vampire-35450.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container-fluid py-3'>
            <h1 className='text-primary pb-4'>Special Service for Client</h1>
            <div className="accommodation-container">
                {
                    services.map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

const SingleService = (props) => {
    const { service, image, shortDescriptionTitle, shortDescription } = props.service;
    return (
        <div className='single-accommodation'>
            <h1>{service}</h1>
            <img className='img-fluid' src={image} alt="" />
            <h3>{shortDescriptionTitle}</h3>
            <h6>{shortDescription}</h6>
            <Button>Take Service</Button>
        </div>
    );
}

export default SpecialServices;
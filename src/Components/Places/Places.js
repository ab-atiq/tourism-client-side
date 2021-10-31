import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Places.css';
const Places = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('https://scary-vampire-35450.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, []);

    return (
        <div className='container-fluid p-2'>
            <h1 className='text-primary mt-3'>Most Attractive Places</h1>
            <h3 className='my-2'>Total Places: {places.length}</h3>
            <div className="places-container">
            {
                places.map(place=><Place key={place._id} place={place}></Place>)
            }
            </div>
        </div>
    );
};

export default Places;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlaceDetails = () => {
    const { single_place } = useParams();
    const [place, setPlace] = useState({});

    useEffect(() => {
        fetch('https://scary-vampire-35450.herokuapp.com/places')
            .then(res => res.json())
            .then(data => {
                const matchedPlace = data.find(singlePlace => singlePlace._id === single_place)
                setPlace(matchedPlace);
            })
    }, [])


    return (
        <div className='container'>
            <h1 className='text-primary my-3'>Place Details: {place.placeName}</h1>
            <h1> {place.placeName} </h1>
            <img className='img-fluid' src={place.image} alt="" />
            <h2>{place.shortDescriptionTitle}</h2>
            <p>{place.shortDescription}</p>
            <h3>{place.fullDescriptionTitle}</h3>
            <p>{place.fullDescription}</p>
        </div>
    );
};

export default PlaceDetails;
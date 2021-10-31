import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Place = (props) => {
    const { _id, placeName, image, shortDescriptionTitle, shortDescription } = props.place;
    return (
        <Container className='place-container p-3 rounded '>
            <h1>{placeName}</h1>
            <img className='img-fluid' src={image} alt="" />
            <h2>{shortDescriptionTitle}</h2>
            <p>{shortDescription}</p>
            <Link to={`/places/${_id}`}><Button>See Details</Button></Link>
        </Container>
    );
};

export default Place;
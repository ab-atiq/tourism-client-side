import axios from 'axios';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddPlace.css';

const AddPlace = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://scary-vampire-35450.herokuapp.com/places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully.');
                    reset();
                }
            })
    };

    return (
        <Container className='py-2 add-place'>
            <h1 className='text-primary my-3'>Please, Add add a place.</h1>
            <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                <label><b>Place Name:</b></label>
                <input {...register("placeName", { required: true, maxLength: 20 })} placeholder='Place Name' />
                <label><b>Image URL:</b></label>
                <input {...register("image")} placeholder='Image URL' />
                <label><b>Short Description Title:</b></label>
                <input {...register("shortDescriptionTitle", { required: true, maxLength: 20 })} placeholder='Short Description Title' />
                <label><b>Short Description:</b></label>
                <textarea {...register("shortDescription")} placeholder='Short Description' />
                <label><b>Full Description Title:</b></label>
                <input {...register("fullDescriptionTitle", { required: true, maxLength: 50 })} placeholder='Full Description Title' />
                <label><b>Full Description Title:</b></label>
                <textarea {...register("fullDescription")} placeholder='Full Description' />
                <Button type='submit'>Add Place</Button>
            </form>
        </Container>
    );
};

export default AddPlace;
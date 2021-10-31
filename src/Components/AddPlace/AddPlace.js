import axios from 'axios';
import React from 'react';
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
        <div>
            <h1 className='text-primary my-3'>Please, Add add a place.</h1>
            <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("placeName", { required: true, maxLength: 20 })} placeholder='Place Name' />
                <input {...register("image")} placeholder='Image URL' />
                <input {...register("shortDescriptionTitle", { required: true, maxLength: 20 })} placeholder='Short Description Title' />
                <textarea {...register("shortDescription")} placeholder='Short Description' />
                <input {...register("fullDescriptionTitle", { required: true, maxLength: 50 })} placeholder='Full Description Title' />
                <textarea {...register("fullDescription")} placeholder='Full Description' />
                <input type="submit" value='Add to Places' />
            </form>
        </div>
    );
};

export default AddPlace;
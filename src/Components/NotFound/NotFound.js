import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className='w-50' src="https://i.ibb.co/9WBNNv9/error-404.jpg" alt="" />
            <br />
            <Link to='/home'>Go Home</Link>
        </div>
    );
};

export default NotFound;
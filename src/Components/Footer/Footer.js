import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faAward } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='bg-dark text-primary'>
            <h1 className='text-white py-3'><FontAwesomeIcon icon={faAward}></FontAwesomeIcon> AR10 Tourism Website <FontAwesomeIcon icon={faAward}></FontAwesomeIcon></h1>
            <h4>Owner of this Website is Atiqur Rahman.</h4>
            <p className='pb-2'>This is <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> Copyright Website.</p>
        </div>
    );
};

export default Footer;
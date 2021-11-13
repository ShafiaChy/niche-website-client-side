import React from 'react';
import notFound from '../../Images/NotFound.jpg'
import Navigation from '../Home/Shared/Navigation/Navigation';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            <img className="not-found-image-size" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
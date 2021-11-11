import React from 'react';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Products from '../Products/Products';
import Navigation from '../Shared/Navigation/Navigation';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Facilities></Facilities>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
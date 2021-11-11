import React from 'react';
import banner from '../../../Images/banner.jpg'
import './Banner.css'

const Banner = () => {
    
  
    return (
        <div>
            <div className="card mb-3 border-0" className="banner-design">
            <div className="row no-gutters banner-div d-flex align-items-center mx-auto">
                <div className="col-md-6 mx-auto text-white">
                    <div className="card-body mx-auto w-75">
                        <h5 className="card-title text-start">NEW ARRIVALS 2021</h5>
                        <h1 className="card-text website-title text-start">POUT PERFECT</h1>
                        <p className="card-text text-start"><small >Discover the latest in beauty at Pout Perfect. Explore our unrivaled selection of lipsticks from classic and emerging brands.</small></p>
                    </div>
                </div>
                <div className="col-md-6 rounded mb-5">
                <img src={banner} className="card-img banner-img w-75" alt="..."/>
                </div>
            </div>
            </div>

            
        </div>
    );
};

export default Banner;
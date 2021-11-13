import React from 'react';
import './ExtraSection.css'
import catOne from '../../../Images/catOne.jpg';
import catTwo from '../../../Images/catTwo.jpg';
import catThree from '../../../Images/catThree.jpg';

const ExtraSection = () => {
    return (
        <div>
            <div className="mt-5">
           
            <h1 className="text-center" style={{backgroundColor:'#ffa2b6',fontFamily:'"Times New Roman", Times, serif'}}>Find Lipsticks In Category</h1>
            </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto my-5">
                    
                    <div className="col arrow ">
                        <div className="card " >
                        <img  src={catOne} className="card-img-top event-image" alt="..."/>
                        <div style={{backgroundColor:'black', color:'#f3718de7'}} className="card-body">
                            <h5  className="card-title text-center">Bullet Lipstick</h5>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col arrow">
                        <div className="card">
                        <img src={catTwo} className="card-img-top event-image" alt="..."/>
                        <div style={{backgroundColor:'black',color:'#f3718de7'}} className="card-body">
                            <h5 className="card-title text-center">Lipgloss</h5>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col arrow">
                        <div className="card">
                        <img src={catThree} className="card-img-top event-image" alt="..."/>
                        <div style={{backgroundColor:'black',color:'#f3718de7'}} className="card-body">
                            <h5 className="card-title text-center">Liquid Lipstick</h5>
                            
                        </div>
                        </div>
                    </div>
                
                    </div>
        </div>
    );
};

export default ExtraSection;
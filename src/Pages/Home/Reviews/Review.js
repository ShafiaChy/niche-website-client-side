import React from 'react';
import StarRating from 'react-star-rating';

import './Review.css'


const Review = (props) => {
    
    const {review,rate,img,name} = props.rev;
      
    
    return (
        <div>
            <div className="col">
                        <div className="card h-100" className="review-banner" style={{minHeight:400}}>
                       
                       <div className="review-info" style={{minHeight:400}}>
                       <div className="card-body">

                            <p className="card-text text-start text-white fs-5">{review}</p>
                            <div>
                            <StarRating name="disabled" caption="Disabled." totalStars={5} rating={rate} disabled={true} />
                            </div>


                            </div>
                            <div className="d-flex justify-content-center w-100 pb-3">
                            <img src={img} style={{height:75}} className="card-img-top rounded-circle w-25 me-3" alt="..."/>
                            <h6 className=" d-flex align-items-center text-white">{name}</h6>
                            </div>
                       </div>
     
                        
                    </div>
                    
                </div> 
                
        </div>
    )
};
    
export default Review;
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    const {key,name,img,price,description} = props.product;
    
    return (
        <div>
            <div className="col" style={{minHeight:400}}>
                        <div className="card h-100" style={{backgroundColor:'#ffa2b6'}}>
                        <img src={img} className="card-img-top" className=" product-image-size" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title" style={{color:'black'}}>{name}</h5>
                            <h5 className="card-text">Tk: {price}/-</h5>
                            <p className="card-text">{description}</p>
                            
                            <Link to={`/purchase/${key}`}><button className="py-2 px-3 rounded button-bg">BUY NOW</button></Link>
                        </div>
                       
                        
                    </div>
                    
                </div> 
                
        </div>
    );
};

export default Product;
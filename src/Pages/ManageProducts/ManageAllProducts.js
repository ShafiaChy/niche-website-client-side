import React from 'react';
import './ManageAllProducts.css'
const ManageAllProducts = (props) => {
    const {key,name,img,price,description,_id} = props.manageProduct;

    const handleDelete = id =>{
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{ 
           
            if(data.deletedCount){
              
                const result = window.confirm('Are you sure you want to delete?');
                if(result){
                    window.location.reload();
          
                }
                else{
                   
                }
                
               
            }

            
              
        })
    }
    
    return (
        <div>
            <div className="col" style={{minHeight:400}}>
                        <div className="card h-100" style={{backgroundColor:'#ffa2b6'}}>
                        <img src={img} className="card-img-top" className=" product-image-size" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title" style={{color:'black'}}>{name}</h5>
                            <h5 className="card-title" style={{color:'black'}}>{key}</h5>
                            <h5 className="card-text">Tk: {price}/-</h5>
                            <p className="card-text">{description}</p>
                            
                            <button onClick={()=> handleDelete(_id)} className="btn btn-danger">Delete</button>
                        </div>
                       
                        
                    </div>
                    
                </div> 
                
        </div>
    );
};

export default ManageAllProducts;
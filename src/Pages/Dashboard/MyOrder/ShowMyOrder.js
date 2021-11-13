import React,{useState,useEffect} from 'react';



const ShowMyOrder = (props) => {
    const [chosenProducts, setChosenProducts] = useState([]);
    const {order,status, _id} = props.chosenOrder;
    //console.log(order)
   
    //LOADING PRODUCTS DATA TO MATCH THE OFFER KEY WITH THE ORDER KEY 
    useEffect(() => {
        fetch('https://still-anchorage-92551.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setChosenProducts(data))
    },[])
    
    const myProducts = chosenProducts.filter(chosenProduct=> chosenProduct.key == order)

    //DELETING ORDERS BY USERS
    const handleDelete = id =>{
        const url = `https://still-anchorage-92551.herokuapp.com/orders/${id}`;
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
                    return
                }
                
               
            }

            
              
        })
    }


    //SHOWING THE USER'S ORDER
    return (
        <div>
         
         <div className="card mb-3 w-75 mx-auto mt-3">
         
            <div className="row no-gutters ">
                    <div className="col-md-4">
                    <img src={myProducts[0]?.img} className="card-img h-75 w-75 d-flex mx-auto my-5" alt="..."/>
                    </div>
                    <div className="col-md-8 my-5">
                    <div className="card-body">
                        <h5 className="card-title">{myProducts[0]?.name}</h5>
                        <h5 className="card-title">Tk: {myProducts[0]?.price}/-</h5>
                        <h6 className="card-title"><span className="text-danger">Status:</span> {status}</h6>

                        <p className="card-text">{myProducts[0]?.details}</p>
                        <button onClick={()=> handleDelete(_id)} className="btn btn-danger">Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ShowMyOrder;
import React ,{useState, useEffect} from 'react';

const ShowAllOrders = (props) => {
    
    const {order,status, name, email, _id} = props.order;
    const [userOrders, setUserOrder] = useState([])
    const [orderStatus, setOrderStatus] = useState([])
    
    //loading product data to match the key property in product with the key property in order
    useEffect(() =>{
        fetch('https://still-anchorage-92551.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setUserOrder(data))
    },[])

    const singleOrder = userOrders.filter(userOrder => userOrder.key == order)

    //loading data to update status
    useEffect(() =>{
        fetch('https://still-anchorage-92551.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrderStatus(data))
    },[])

    //approve an order
    const handleShipped = id =>{

        const url = `https://still-anchorage-92551.herokuapp.com/orders/${id}`;
        
        const approved = orderStatus.filter(orderStat => orderStat._id == id)
        approved[0].status = 'Shipped';
        
    
        // console.log(approved)
        fetch(url, {
            method:'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(approved)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                alert('Order got approved!')
              
                    window.location.reload();
                

            }
        })
       
    } 

    //delete an order
    const handleDelete = id =>{
        const url = `https://still-anchorage-92551.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{ 
            //console.log(data)
            if(data.deletedCount){
                const result = window.confirm('Do you want to delete?')
                if(result){
                    window.location.reload();
          
                }    
            }
        })
    }
  
  
    return (
        <div>
           
           
            <div className="col">
                        <div className="card h-100">
                        <img src={singleOrder[0]?.img} className="card-img-top offer-image-size" alt="..."/>
                        <div className="card-body">

                            <h6 className="card-title"><span className="text-danger ">
                                Username:</span> {name}
                            </h6>

                            <h6 className="card-title"><span className="text-danger ">
                                Email:</span> {email}</h6>

                            <h6 className="card-title"><span className="text-danger ">
                                Product ID:</span> {order}</h6>

                            <h6 className="card-title"><span className="text-danger">
                                Product Name:</span> {singleOrder[0]?.name}</h6>

                            <h6 className="card-text"><span className="text-danger">
                                Price:</span> Tk {singleOrder[0]?.price}/-</h6>

                            <h6 className="card-text"><span className="text-danger">
                                Status:</span> {status}</h6>

                            <div className="d-flex">
                            <button onClick={()=> handleShipped(_id)} className="btn text-white me-3" style={{backgroundColor:'#f3718de7'}}>
                               Shipped
                            </button>

                            <button onClick={()=> handleDelete(_id)} className="btn btn-danger">
                                Delete
                            </button>
                            </div>
                         
                        </div>
                      
                    </div>
                    
                </div> 
        </div>
       
    );
};

export default ShowAllOrders;
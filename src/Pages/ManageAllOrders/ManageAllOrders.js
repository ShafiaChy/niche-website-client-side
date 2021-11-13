import React ,{useState, useEffect} from 'react';
import Dashboard from '../Home/Shared/Dashboard/Dashboard';
import Footer from '../Home/Shared/Footer/Footer';
import ShowAllOrders from './ShowAllOrders';




const ManageAllOrders = () => {
    const [orders, setOrder] = useState([]);
    useEffect(() =>{
        fetch('https://still-anchorage-92551.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrder(data))

    },[])
    
    return (
        <div>
            <Dashboard></Dashboard>
            <h1 className="text-center mt-3">ALL USERS' ORDERS</h1>
           <div className="py-5 mx-auto row row-cols-1 row-cols-md-3 w-75 g-4">
               
                {
                        orders.map(order => <ShowAllOrders
                        key={order._id}
                        order={order}
                        ></ShowAllOrders>)
                }
              </div>
              <Footer></Footer>
        </div>
    );
};

export default ManageAllOrders;
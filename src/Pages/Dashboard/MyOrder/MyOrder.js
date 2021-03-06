import React,{useState,useEffect} from 'react';
import useAuth from '../../../Hooks/useAuth';
import Dashboard from '../../Home/Shared/Dashboard/Dashboard';
import Footer from '../../Home/Shared/Footer/Footer';

import ShowMyOrder from './ShowMyOrder';

const MyOrder = () => {
    const [myOrders, setMyOrder] = useState([]);
 
    const {user} = useAuth();

    //LOADING ORDER DATA TO MATCH THE EMAIL IN ORDER WITH THE EMAIL AFTER LOGINING
    useEffect(() => {
        fetch('https://still-anchorage-92551.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setMyOrder(data))
    },[])
    const chosenOrders = myOrders.filter(myOrder => myOrder.email == user.email)

    //MAPPING THE DATA FOUND WHEN MATCHED EMAILS FOUND
    
    return (
        <div>
           <Dashboard></Dashboard>
            {
                chosenOrders.map(chosenOrder=> <ShowMyOrder
                key={chosenOrder._id}
                chosenOrder ={chosenOrder}
                ></ShowMyOrder>)
            }
            <Footer></Footer>
        </div>
    );
};

export default MyOrder;
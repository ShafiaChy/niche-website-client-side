import React,{useState} from 'react';
import {Button, Offcanvas} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './Dashboard.css'

const Dashboard = () => {
    const {logOut,admin} = useAuth();
    function Example() {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
            <div className="menuicon"></div>
            <div className="menuicon"></div>
            <div className="menuicon"></div>
            </Button>
      
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Dashboard</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <NavLink className=" mt-2 ms-3 text-decoration-none" to="/home" href="#pricing">Home</NavLink> 
              <br />
             {
               admin &&  <div>
                 <NavLink className=" mt-2 ms-3 text-decoration-none" to="/admin" href="#pricing">Make Admin</NavLink> 
                 <br />
                 <NavLink className=" mt-2 ms-3 text-decoration-none" to="/manage-all-orders" href="#pricing">Manage Users' Orders</NavLink> 
                 <br />
                 <NavLink className=" mt-2 ms-3 text-decoration-none" to="/add-product" href="#pricing">Add A Product</NavLink>
                 <br />
                 <NavLink className=" mt-2 ms-3 text-decoration-none" to="/manage-products" href="#pricing">Manage All Products</NavLink> 
                 <br />
               </div>
             
             }
           
             {
               !admin && <div>
                  <NavLink className=" mt-2 ms-3 text-decoration-none" to="/my-order" href="#pricing">My Order</NavLink> 
                  <br />
                  <NavLink className=" mt-2 ms-3 text-decoration-none" to="/pay" href="#pricing">Pay</NavLink> 
                  <br />
                  <NavLink className=" mt-2 ms-3 text-decoration-none" to="/review" href="#pricing">Add A Review</NavLink> 
               </div>
             }

              </Offcanvas.Body>
              <button style={{backgroundColor:'black',color: "#ffd8cd"}}className="rounded   py-sm-2 px-sm-3" onClick={logOut}>Sign Out</button>
            </Offcanvas>
          </>
        );
      }
      
     
    return (
      
        <Example />
     
    );
};

export default Dashboard;
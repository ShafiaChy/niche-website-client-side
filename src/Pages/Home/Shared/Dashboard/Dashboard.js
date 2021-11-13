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
        const {user} = useAuth();
        
      
        return (
          <div >
            <Button style={{backgroundColor:'#f3718de7',border:0}} onClick={handleShow}>
            <div className="menuicon"></div>
            <div className="menuicon"></div>
            <div className="menuicon"></div>
            </Button>
      
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header style={{backgroundColor:'#f3718de7'}} className="w-100" closeButton>
                <Offcanvas.Title >Dashboard</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <NavLink style={{color:'#f3718de7'}} className=" mt-2 ms-3 text-decoration-none" to="/home" href="#pricing">Home</NavLink> 
              
              <br />
             {
               admin &&  <div>
                 <NavLink style={{color:'#f3718de7'}} className=" mt-2 ms-3 text-decoration-none" to="/admin" href="#pricing">Make Admin</NavLink> 
                 <br />
                 <NavLink style={{color:'#f3718de7'}} className=" mt-2 ms-3 text-decoration-none" to="/manage-all-orders" href="#pricing">Manage Users' Orders</NavLink> 
                 <br />
                 <NavLink style={{color:'#f3718de7'}} className=" mt-2 ms-3 text-decoration-none" to="/add-product" href="#pricing">Add A Product</NavLink>
                 <br />
                 <NavLink style={{color:'#f3718de7'}} className=" mt-2 ms-3 text-decoration-none" to="/manage-products" href="#pricing">Manage All Products</NavLink> 
                 <br />
               </div>
             
             }
           
             {
               !admin && <div>
                  <NavLink style={{color:'#f3718de7'}} className=" mt-2 ms-3 text-decoration-none" to="/my-order" href="#pricing">My Orders</NavLink> 
                  <br />
                  <NavLink style={{color:'#f3718de7'}}className=" mt-2 ms-3 text-decoration-none" to="/pay" href="#pricing">Pay</NavLink> 
                  <br />
                  <NavLink style={{color:'#f3718de7'}} className=" mt-2 ms-3 text-decoration-none" to="/review" href="#pricing">Add A Review</NavLink> 
               </div>
             }

              </Offcanvas.Body>
              {
                            user.email ? 
                            <div className="d-flex">
                              
                              <button style={{backgroundColor:'black',border:0,color: "#f3718de7"}}className="rounded py-2 px-3  py-sm-2 px-sm-3 ms-3 mb-3" onClick={logOut}>Sign Out</button>
                            </div>
                            :
                            <NavLink className="text-decoration-none text-dark" to='/login' href="#deets"><h5>Login</h5></NavLink>  
                        }
            </Offcanvas>
           
          </div>
        );
      }
      
     
    return (
      
        <Example />
     
    );
};

export default Dashboard;
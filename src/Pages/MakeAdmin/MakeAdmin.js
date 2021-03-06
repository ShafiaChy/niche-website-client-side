import React, { useState } from 'react';
import Dashboard from '../Home/Shared/Dashboard/Dashboard';
import Footer from '../Home/Shared/Footer/Footer';
import useAuth from '../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] =  useState('');
    const {token} = useAuth();
   
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => { 
        e.preventDefault();
        const user = {email};
        
            fetch('https://still-anchorage-92551.herokuapp.com/users/admin',{
                method:'PUT',
                headers:{
                    'authorization': `Bearer ${token}`,
                    'content-type':'application/json'
                },
                body: JSON.stringify(user)
       })
       .then(res => res.json())
       .then(data =>{
           if(data.modifiedCount){
            alert("Admin successfully made!");
            
           }
       })
        }
   
    return (
        <div>
            <Dashboard></Dashboard>
            <h1 className="text-center mt-5">Make Admin</h1>
        <form onSubmit={handleAdminSubmit}>
        <div className="row mb-3 ">
            
            <div className="col-sm-10 mx-auto">
                <input  type="email" onBlur={handleEmailChange} placeholder="Enter admin's email address"  className="form-control mx-auto w-50" id="inputEmail3" required/>
            </div>
        </div>
        
  
        <div className="d-flex justify-content-center">
                <button type="submit" style={{backgroundColor:"#f3718dce"}} className="btn text-white mb-3">Make Admin</button>
        </div>
        
     </form>
     <Footer></Footer>
    </div>
    );
};

export default MakeAdmin;
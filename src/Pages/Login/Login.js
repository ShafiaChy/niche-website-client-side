import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { useLocation, useHistory } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Home/Shared/Navigation/Navigation';




const Login = () => {
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const [error, setError] =  useState('');
    const {authError,signInWithGoogle,loginWithEmailAndPassword} = useAuth();
    const location = useLocation();
    const history = useHistory();

     

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
       
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
          const password=e.target.value;
          if(password<6){
              setError("must be at least 6")
              return;
          }
          setPassword(password);
        }
       
    const handleEmailAndPasswordSignIn = e => {
        e.preventDefault();
        loginWithEmailAndPassword(email,password, location, history)
        
        
    }
    return (
        <div  className="login-bg" style={{color:"#f3718dce", height:'90vh'}}>
            <Navigation></Navigation>
           
        <h1 className="mt-5 d-flex justify-content-center">Welcome Back!</h1>
        <p className="d-flex justify-content-center">Sign in to continue</p>  

        <form onSubmit={handleEmailAndPasswordSignIn}>
        <div className="row mb-3 ">
            
            <div className="col-sm-10 mx-auto">
                <input  type="email" onBlur={handleEmailChange} placeholder="Enter your email address" className="form-control mx-auto w-50" id="inputEmail3" required/>
            </div>
        </div>
        <div className="row mb-3">
            
        <div className="col-sm-10 mx-auto">
            <input type="password" onBlur={handlePasswordChange}  placeholder="password" className="form-control mx-auto w-50" id="inputPassword3" required/>
        </div>
    </div>
    <div className="d-flex justify-content-center">
        {
               authError?
               <span className="text-danger" style={{textShadow:"1px 1px rgb(83, 80, 80)"}}><h6>{authError}</h6></span>
               :
               <span className="text-danger" style={{textShadow:"1px 1px rgb(83, 80, 80)"}}><h6>{error}</h6></span>
           }
    </div>
    <p className="d-flex justify-content-center">Don't have an account? <Link to = '/register'> Register</Link> </p>
   <div className="d-flex justify-content-center">
   <button type="submit" style={{backgroundColor:"#f3718dce"}} className="btn text-white mb-3">Sign in</button>
   </div>
    <hr />
    </form>
     
       <p className="d-flex justify-content-center">or</p>
       
     <div className="d-flex justify-content-center">
        <button style={{backgroundColor:"#f3718dce"}} className="rounded text-white py-2 d-flex justify-content-center border-white" onClick={handleGoogleSignIn}> Sign In With Google</button>
     </div>
     
</div>
    );
};

export default Login;
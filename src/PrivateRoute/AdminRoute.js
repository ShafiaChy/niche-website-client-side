import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';





  
const AdminRoute = ({children, ...rest}) => {
    const {user, isLoading, admin} = useAuth();
    if (isLoading){
        return <Spinner className="d-flex mx-auto spinner-position" animation="grow" />;
    } 
    return (
        <div>
         
           <Route
            {...rest}
            
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname: "/home",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
        
        </div>
    );
};

export default AdminRoute;
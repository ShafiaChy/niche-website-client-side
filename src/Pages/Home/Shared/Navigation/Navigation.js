import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './Navigation.css'


const Navigation = () => {
  const { user,logOut } = useAuth();
    return (
        <Navbar className="navbar-background py-3" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-title" href="#home"><h4>Pout Perfect</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="text-decoration-none text-dark me-3" to="/home" href="#home"><h5>Home</h5></NavLink>
          
              <NavLink className="text-decoration-none text-dark" to="/explore" href="#home"><h5>Explore</h5></NavLink>
            </Nav>
            <Nav>
              
            <h5 className="text-dark me-2 mb-2 mt-2" style={{textShadow:"1px 1px rgb(83, 80, 80)"}}>{user.displayName}</h5>
                        {
                            user.email ? 
                            <button style={{backgroundColor:'black',color: "#ffd8cd"}}className="rounded py-2 px-3  py-sm-2 px-sm-3" onClick={logOut}>Sign Out</button>
                            :
                            <NavLink className="text-decoration-none text-dark" to='/login' href="#deets"><h5>Login</h5></NavLink>  
                        }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;
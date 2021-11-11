import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Register/Register';
import Explore from './Explore/Explore';
import Purchase from './Purchase/Purchase'
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      
      <AuthProvider>
      <Router>
   
   <Switch>
     <Route exact path="/">
      <Home></Home>
     </Route> 
     <Route exact path="/home">
       <Home></Home>
     </Route>
     <Route exact path="/login">
       <Login></Login>
     </Route>
     <Route exact path="/register">
      <Register></Register>
     </Route>
     <Route exact path="/explore">
      <Explore></Explore>
     </Route>
     <PrivateRoute exact path ="/purchase/:id">
          <Purchase></Purchase>
        </PrivateRoute>
     
   </Switch>
   </Router>
  
      </AuthProvider>
     
    
    </div>
  );
}

export default App;

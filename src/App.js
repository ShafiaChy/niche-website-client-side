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
import Dashboard from './Pages/Home/Shared/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import Pay from './Pages/Pay/Pay';
import AddReview from './Pages/AddReview/AddReview';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import NotFound from './Pages/NotFound/NotFound';
import AdminRoute from './PrivateRoute/AdminRoute';

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
     
     <PrivateRoute exact path="/dashboard">
      <Dashboard></Dashboard>
     </PrivateRoute>
     <PrivateRoute exact path="/my-order">
      <MyOrder></MyOrder>
     </PrivateRoute> 
     <AdminRoute exact path="/admin">
     <MakeAdmin></MakeAdmin>
     </AdminRoute>
     <PrivateRoute exact path="/pay">
        <Pay></Pay>
     </PrivateRoute> 
     <PrivateRoute exact path="/review">
        <AddReview></AddReview>
     </PrivateRoute>  
     <AdminRoute exact path="/manage-all-orders">
        <ManageAllOrders></ManageAllOrders>
     </AdminRoute>  
     <PrivateRoute exact path ="/purchase/:id">
          <Purchase></Purchase>
      </PrivateRoute>
      <AdminRoute exact path ="/add-product">
          <AddProduct></AddProduct>
      </AdminRoute>
      <AdminRoute exact path ="/manage-products">
         <ManageProducts></ManageProducts>
      </AdminRoute>

      <Route path="/*">
      <NotFound></NotFound>
     </Route>
     
   </Switch>
   </Router>
  
  </AuthProvider>
     
    
    </div>
  );
}

export default App;

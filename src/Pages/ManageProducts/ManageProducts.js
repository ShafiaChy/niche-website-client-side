import React ,{useEffect,useState}from 'react';
import Dashboard from '../Home/Shared/Dashboard/Dashboard';
import ManageAllProducts from './ManageAllProducts';

const ManageProducts = () => {

    const [manageProducts, setManageProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setManageProducts(data))
    
        },[])
    return (   
        <div>
            <Dashboard></Dashboard>
            <h1 className="text-center" style={{color:'#ffa2b6',fontFamily:'"Times New Roman", Times, serif'}}>Manage All Products</h1>
            <div className="mb-5 py-5 mx-auto row row-cols-1 row-cols-md-3 w-75 g-4">
            {
                    manageProducts.map(manageProduct => <ManageAllProducts
                    key = {manageProduct.key}
                    manageProduct = {manageProduct}></ManageAllProducts>)
            }
        </div>
        </div>
        
    );
};

export default ManageProducts;
import React ,{useEffect,useState}from 'react';
import Product from './Product';
const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://still-anchorage-92551.herokuapp.com/home/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    
        },[])
    return (   
        <div>
            <h1 className="text-center" style={{backgroundColor:'#ffa2b6',fontFamily:'"Times New Roman", Times, serif'}}>OUR LASTEST LIPSTICKS</h1>
            <div className="mb-5 py-5 mx-auto row row-cols-1 row-cols-md-3 w-75 g-4">
            {
                    products.map(product => <Product
                    key = {product.key}
                    product = {product}></Product>)
            }
        </div>
        </div>
        
    );
};

export default Products;
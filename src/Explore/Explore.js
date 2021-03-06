import React ,{useEffect,useState}from 'react';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import Navigation from '../Pages/Home/Shared/Navigation/Navigation';
import ExploreProduct from './ExploreProduct';

const  Explore = () => {

    const [exploreProducts, setExploreProducts] = useState([]);

    useEffect(() => {
        fetch('https://still-anchorage-92551.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setExploreProducts(data))
    
        },[])
    return (   
        <div>
            <Navigation></Navigation>
            <h1 className="text-center" style={{backgroundColor:'#ffa2b6',fontFamily:'"Times New Roman", Times, serif'}}>DAZZLING LIPSTICKS</h1>
            <div className="mb-5 py-5 mx-auto row row-cols-1 row-cols-md-3 w-75 g-4">
            {
                    exploreProducts.map(exploreProduct => <ExploreProduct
                    key = {exploreProduct.key}
                    exploreProduct = {exploreProduct}></ExploreProduct>)
            }
        </div>
        <Footer></Footer>
        </div>
        
    );
};

export default Explore;
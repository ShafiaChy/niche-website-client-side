import React ,{useEffect,useState}from 'react';
import Review from '../Reviews/Review'

const Products = () => {
    
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    
        },[])
    return (   
        <div>
            <h1 className="text-center" style={{backgroundColor:'#ffa2b6',fontFamily:'"Times New Roman", Times, serif'}}>What Our Clients Say</h1>
            <div className="mb-5 py-5 mx-auto row row-cols-1 row-cols-md-3 w-75 g-4">
            {
                    reviews.map(rev =><Review
                    key = {rev.key}
                    rev = {rev}
                    ></Review>
                    )
            }
        </div>
        </div>
        
    );
};

export default Products;
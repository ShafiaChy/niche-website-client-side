import axios from 'axios';
import { useForm } from "react-hook-form";
import Dashboard from '../Home/Shared/Dashboard/Dashboard';
import Footer from '../Home/Shared/Footer/Footer';
import './AddReview.css'

const AddReview = () => {
    
    //react hook form used to get the data from add your review form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{ 
        console.log(data);
        axios.post('https://still-anchorage-92551.herokuapp.com/reviews', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('successfully added')
                reset();
            }
        })
    }
  
   
    return (
        <div className="add-review-bg">
            <Dashboard></Dashboard>
            <div className="w-75 mx-auto py-5 add-a-review-div rounded mt-5">
                <h2 className="text-center mb-4 mx-3">Add Your Review</h2>
            <div className="ms-3">
            <form onSubmit={handleSubmit(onSubmit)}>
           
                <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <input className="w-75 w-sm-100 rounded border-1 input-height" {...register("name", { required: true, maxLength: 20 })} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputRate" className="col-sm-2 col-form-label input-height">Rate</label>
                    <div className="col-sm-10">
                    <input className="w-75 rounded border-1" type="float"  {...register("rate")}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputReview" className="col-sm-2 col-form-label">Review</label>
                    <div className="col-sm-10">
                    <textarea style={{height:"300px"}} className="w-75 rounded border-1 input-textarea" {...register("review")}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputImage" className="col-sm-2 col-form-label">Image</label>
                    <div className="col-sm-10">
                    <input className="w-75 rounded border-1 input-height" {...register("img")}/>
                    </div>
                    
                </div>
                <input type="submit" className="btn bg-dark text-white"/>
                  
                
                </form>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddReview;
import axios from 'axios';
import { useForm } from "react-hook-form";
import Dashboard from '../Home/Shared/Dashboard/Dashboard';
import Footer from '../Home/Shared/Footer/Footer';
import './Product.css'

const AddProduct = () => {
    
    //react hook form used to get the data from add a service
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{ 
        console.log(data);
        axios.post('https://still-anchorage-92551.herokuapp.com/products', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Product added successfully')
                reset();
            }
        })
    }
  
   
    return (
        <div >
            <Dashboard></Dashboard>
            <div  className="w-75 mx-auto py-5 add-a-product-div rounded mt-5">
                <h2 className="text-center mb-4 mx-3">Add A New Product</h2>
            <div  className="ms-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              
            <div className="row mb-3">
                      {/* keys 101-110 are taken */}
                    <label htmlFor="inputId" className="col-sm-2 col-form-label">Product Key</label>
                    <div className="col-sm-10">
                    <input type="number" className="w-75 w-sm-100 rounded border-1 input-height" {...register("key")} placeholder="start with 111" />
                    </div>
                </div>
           
                <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Product Name</label>
                    <div className="col-sm-10">
                    <input className="w-75 w-sm-100 rounded border-1 input-height" {...register("name", { required: true, maxLength: 20 })} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPrice" className="col-sm-2 col-form-label input-height">Price</label>
                    <div className="col-sm-10">
                    <input className="w-75 rounded border-1" type="number"  {...register("price")}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Caption</label>
                    <div className="col-sm-10">
                    <textarea className="w-75 rounded border-1 input-textarea" {...register("description")}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputImage" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                    <textarea className="w-75 rounded border-1 input-textarea" {...register("details")}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputImage" className="col-sm-2 col-form-label">Image</label>
                    <div className="col-sm-10">
                    <input className="w-75 rounded border-1 input-height" {...register("img")}/>
                    </div>
                </div>
              
                    <input type="submit" className="btn btn-dark text-white"/>
                
                </form>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;
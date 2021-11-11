import React from 'react';
import lorry from '../../../Images/lorry.png'
import money from '../../../Images/money.png'
import phone from '../../../Images/phone.png'


const Facilities = () => {
    return (
        <div>
             <div className="mb-5 py-5 mx-auto row row-cols-1 row-cols-md-3 w-75 g-4 " style={{marginTop:-100}}>
             <div className="card mb-3 py-3" style={{backgroundColor:'#ffa2b6'}}>
                <div className="row no-gutters" >
                    <div className="col-md-5 mx-auto my-2 ">
                    <img src={lorry} className="card-img mt-2 w-75" style={{height:80}} alt="..."/>
                    </div>
                    <div className="col-md-7">
                    <div className="card-body text-center">
                       <small>Fast Shipping</small>
                       <br />
                        <small>Quick shipping to your door.</small>
                        
                    </div>
                    </div>
                </div>
                </div>
                <div className="card mb-3 py-3" style={{backgroundColor:'#ffa2b6'}}>
                <div className="row no-gutters">
                    <div className="col-md-5  mx-auto my-2">
                    <img src={money} className="card-img w-75" style={{height:80}} alt="..."/>
                    </div>
                    <div className="col-md-7">
                    <div className="card-body text-center">
                       <small>6 Month Returns</small>
                       <br />
                        <small>No Questions Asked.</small>
                        
                    </div>
                    </div>
                </div>
                </div>
               
                <div className="card mb-3 py-3" style={{backgroundColor:'#ffa2b6'}}>
                <div className="row no-gutters">
                    <div className="col-md-5 mx-auto my-2">
                    <img src={phone} className="card-img w-75" style={{height:80}} alt="..."/>
                    </div>
                    <div className="col-md-7">
                    <div className="card-body text-center">
                       <small>Great Customer Care</small>
                       <br />
                        <small>Our Team Loves To Help.</small>
                        
                    </div>
                    </div>
                </div>
                </div>
                </div>
        </div>
    );
};

export default Facilities;
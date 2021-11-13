import React from 'react';
// fontawesome icons packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    // fontawesome icons
    const icon = <FontAwesomeIcon icon={faFacebook} />
    const icon2 = <FontAwesomeIcon icon={faInstagram} />
    const icon3 = <FontAwesomeIcon icon={faTwitter} />
    return (
        <div style={{backgroundColor:"black", marginTop:'300px'}}>
            <div className="row g-5 w-100 mx-auto py-5" style={{color:'#f3718de7'}}>
                <div className="col-6 col-md-4 col-sm-6">
                    <h5>CUSTOMER SUPPORT</h5>
                    <h6>Contact Us</h6>
                    <h6>FAQ</h6>
                    <h6>Shipping and Returns </h6>
                    <h6>Track Your Order</h6>
                    <h6>Gift Cards</h6>
                    <h6>Current Promotions</h6>
                </div>
                <div className="col-6 col-md-4 col-sm-6">
                    <h5>ABOUT US</h5>
                    <h6>Our Manifesto</h6>
                    <h6>Blog</h6>
                    <h6>Careers</h6>
                    <h6>Cookie Settings</h6>
                    <h6>Digital Accessibility</h6>
                    
                </div>
                <div className="col-12 col-md-4 col-sm-12"> <label for="exampleInputEmail1">EMAIL SIGN UP</label>
                    <div className="d-flex my-2">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <button style={{backgroundColor:'#f3718de7', color:'white'}} type="submit" className="btn">Submit</button>
                    </div>
                    <small>Sign up today and be the first to find out about exclusive sales, product launches, and special events. </small>
                    <br />
                    <br />
                    <h5>FOLLOW US</h5>
                    <div className="w-25"><h5 className="d-flex justify-content-between">{icon}  {icon2}  {icon3}</h5></div>
                    <br />
                    <h5>CONTACT US</h5>
                    <p>
                        email: poutperfect@gmail.com
                        <br />
                        phone: 031 658794-99
                  
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;
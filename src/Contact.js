import React from 'react';
import logoalta from './assets-final-project-fe/img/logo-ALTA-v2@2x.png';

function Contact (){
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 col-12 d-flex align-items-center nol">
                        <img src={logoalta} width="248px" alt="" id="left-image"/> 
                        <div className="box-biru"></div>
                    </div>
                    
                <div className="col-md-7 col-12 ">
                    <form className="contact-us">
                        Contact Us <br/> <br/>
                        <div className="form-group">
                            <label for="FormControlInput1">Full Name<span>*</span></label>
                            <input type="text" className="form-control" id="FormControlInput1" placeholder="Your Full Name" autofocus />
                        </div>
                        <div className="form-group">
                            <label for="FormControlInput2">Email Address<span>*</span></label>
                            <input type="email" className="form-control" id="FormControlInput2" placeholder="example@domain.com" />
                        </div>
                        <div className="form-group">
                            <label for="FormControlInput3">Phone Number<span>*</span></label>
                            <input type="tel" className="form-control" id="FormControlInput3" placeholder="08543890****" />
                        </div>
                        <div className="form-group">
                            <label for="FormControlSelect1">Nationality</label>
                            <select className="form-control" id="FormControlSelect1" >
                            <option >Indonesian</option>
                            <option>Malaysian</option>
                            <option>American</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="FormControlTextarea1">Message</label>
                            <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div >
                            <button className="submit">Submit</button>  
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
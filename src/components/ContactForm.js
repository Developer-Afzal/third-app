import React from 'react'
import emailjs from 'emailjs-com';
import {Link} from "react-router-dom"

 const ContactForm = () => {
    function Sendemail(e){
      e.preventDefault();
      emailjs.sendForm('service_ree3gub','template_bd42y5n',e.target,'icTbL0LKXtBKO1wl0').then(res=>{
      console.log(res);
      }).catch(err=> console.log(err));
      
     
     
    }

  return (
    <>
    <form>
    <div className="col-md-8 mx-auto mt-2">
      <label id="exampleFormControlInput1" className="form-label">Enter Your Contact Number</label>
      <input className="form-control form-control-sm" name="name" />
      </div>
      <div className="col-md-8 mx-auto mt-2">
      <label id="exampleFormControlInput1" className="form-label">Enter Your Contact Number</label>
      <input className="form-control form-control-sm" name="contact"/>
      </div>
      <div className="col-md-8 mx-auto mt-2">
      <label id="exampleFormControlInput1" className="form-label">Enter Your Email Address</label>
      <input className="form-control form-control-sm" name="user_email" />
      </div>
      <div className="col-md-4 mx-auto text-center mt-4"><button className='btn btn-info' ><Link to="/thanks" className='link' >Submit</Link></button></div>
      </form>
    </>
  );

}

export default ContactForm;
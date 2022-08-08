import {useForm} from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
 const ContactForm = () => {
  const navigate= useNavigate();
  const [userinfo, setuserinfo] = useState( );
  const { register, handleSubmit, formState:{errors}} = useForm();
    function onSubmit(data){
      // data.preventDefault();
        setuserinfo("We have Received your request");
        navigate('/thanks'); 
        console.log(data);
    }

  return (
    <>
    {/* <pre style={{color:'red'}}>{JSON.stringify(userinfo, undefined, 3)}</pre> */}
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="col-md-8 mx-auto mt-2">
      <label>Enter Your Full Name</label>
      <input className="form-control form-control-sm" type="text" name="name" {...register("name",{required:"Name is required", maxLength: { value:25, message:"Your name is soo long"},pattern:{value:/^[+-]?\D*(?:[.,]\d*)?$/, message:"Please enter only Alphabet"}})} />
      <p>{errors.name?.message}</p>
      </div>
      <div className="col-md-8 mx-auto mt-2">
      <label>Enter Your Contact Number</label>
      <input className="form-control form-control-sm" name="contact" {...register("contact",{required:"Contact is Required",minLength:{value:10, message:"Please Enter Maximum 10 Digits"}, maxLength:{value:10, message:"Please enter vaild contact No"},pattern:{value:/^[+-]?\d*(?:[.,]\d*)?$/, message:"Please enter only Number"}})} />
      <p>{errors.contact?.message}</p>
      </div>
      <div className="col-md-8 mx-auto mt-2">
      <label>Enter Your Email Address</label>
      <input className="form-control form-control-sm" type="email" name="user_email" {...register("email",{required: "email is required" })}  />
      <p>{errors.email?.message}</p>
      </div>
      <div className="col-md-4 mx-auto text-center mt-4"><button className='btn btn-info'>Submit</button></div>
      </form>
    </>
  );

}

export default ContactForm;

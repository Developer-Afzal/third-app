import React from 'react'
import banner from '../Images/banner-img.jpg';
import AC from '../Images/AC.png';
import refri from '../Images/refrigerator.png';
import cooler from '../Images/cooler.png';
import Washing_machine from '../Images/Washing-machine.png';
import Oven from '../Images/Oven.png';
import Service from '../Images/Service.png';
import contact from '../Images/contact.png';
import {Link} from 'react-router-dom';
import ContactForm from './ContactForm';
import {useRef, useState} from 'react';
const Home = () => {
  const [box, setbox]=useState(true);
  const modal=useRef();
  const getEnq =()=>{
    setbox(!box);
      if(box===true){
       modal.current.style.display="block";
      }
      if(box===false){
        modal.current.style.display="none";
      }
  }

  function close(){
    
    modal.current.style.display="none";
    setbox(!box);
    
  }

  return (
    <>
    <div ref={modal} className="row modal text-center pt-5 ">
    <div className='row'>
    <b className='close' onClick={close}>X</b>
    </div>
    <strong>Get Enquire Now</strong>
    <ContactForm/>
    </div>
      <div className='container'>
      <div className='row mt-4'>
      < div className='col-md-6 text-left' id="d1">
          <h1>Home Solution</h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nostrum accusamus quae voluptatum qui dolorem voluptates sit iusto delectus vel, dolor, at aspernatur natus deserunt tenetur maxime vitae porro eveniet sapiente voluptate. Eligendi sapiente inventore deserunt ad sequi ullam id architecto a, magni fugit magnam ducimus, soluta in, obcaecati nemo!</p> 
          <button className='btn btn-info' onClick={getEnq}>GET ENQUIRE</button>
        </div>
        <div className='col-md-6 text-center' id="d2">
          <img src={banner} className="Home-img" alt="banner" />
        </div>
      </div>
    </div>
    <section className='services conatiner-fluid text-center'>
      <strong>Our Services</strong>
          <div className='container border-3'>
              <div className="col-md-12 border mt-5">
                <div className="row">
                <div className='col-md-6'>
                    <img src={Service} alt="Service-img" className="Home-img"/>
                  </div>
                  <div className='col-md-6 row mt-5'>
                  <div className='col-md-6  text-center p-3'>
                  <img src={refri} alt="refri" className='icons'/><br/>
                  <b>Refrigerator Repairing</b>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nostrum accusamus quae voluptatum qui dolorem voluptates sit iusto delectus vel, dolor,</p>
                   <Link to="/third-app/Services" className='link'>View Details</Link>
                </div>
                <div className='col-md-6  text-center p-3'>
                  <img src={AC} alt="cooler" className='icons'/><br/>
                  <b>AC Repairing</b>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nostrum accusamus quae voluptatum qui dolorem voluptates sit iusto delectus vel, dolor,</p>
                 <Link to="/third-app/Services" className='link'>View Details</Link>
                </div>
                  </div>
                  <div className='col-md-10 row mx-auto'>
                  <div className='col-md-4 text-center p-3'>
                  <img src={Washing_machine} alt="Washing_machine" className='icons'/><br/>
                  <b>Washing machine Repairing</b>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nostrum accusamus quae voluptatum qui dolorem voluptates sit iusto delectus vel, dolor,</p>
                 <Link to="/third-app/Services" className='link'>View Details</Link>
                </div>
                <div className='col-md-4 text-center p-3'>
                  <img src={Oven} alt="Oven" className='icons'/><br/>
                  <b>Oven Repairing</b>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nostrum accusamus quae voluptatum qui dolorem voluptates sit iusto delectus vel, dolor,</p>
                 <Link to="/third-app/Services" className='link'>View Details</Link>
                </div>
                <div className='col-md-4 text-center p-3'>
                  <img src={cooler} alt="Oven" className='icons'/><br/>
                  <b>Cooler Repairing</b>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nostrum accusamus quae voluptatum qui dolorem voluptates sit iusto delectus vel, dolor,</p>
                 <Link to="/third-app/Services" className='link'>View Details</Link>
                </div>
                  </div>
                </div>
              </div>
          </div>
      </section>
    <section className="contact-section mt-5 pt-5">
      <div className='container'>
          <div className='row'>
          <div className="col-md-6 col-12 text-center">
            <div className='home-form-box'>
            <strong >Contact US</strong>
            <ContactForm/>
            </div>
          </div>
          <div className='col-md-6 col-12 text-left'>
            <img src={contact} className="Home-img" alt="banner-logo"/>
          </div>
          </div>
      </div>
      </section>
    </>
  )
}
export default Home;

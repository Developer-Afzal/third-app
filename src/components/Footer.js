import React from 'react';
import call from '../Images/call.png';
import whatsapp from '../Images/whatsapp.png';


 const Footer = () => {
  return (
    <>
    <section className='Footer-section'>
      <div>
      <a href="tel:8318753610" className='call'><img src={call} className="icons" alt="call"/></a>
      </div>
      <div className='footer-middle-section'>
      <p>Conatct No :- +91-9999999999<br/>
        Address :- Lucknow Uttar Pradesh</p>
        <b style={{padding:"20px"}}>Created By :- Developer Afzal</b>
      </div>
      <div>
      <a href="https://api.whatsapp.com/send?phone=8318753610&text=hello" className='whatsapp'><img src={whatsapp} className="icons" alt="whatsapp"/></a>
      </div>
    </section>
    </>
  )
}

export default Footer;
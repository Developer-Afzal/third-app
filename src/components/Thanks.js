import React from 'react';
import thanks from '../Images/thanks_img.png';
import {Link} from 'react-router-dom';

 const Thanks = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row p-5'>
            <div className='col-md-6 text-ceter col-12 p-5' id="t1">
                
                <b className='service-text'>We have received your request.</b>
                <p className='service-text'>We will contact you soon! Click Back button to go Home Page</p>    
                <br/>
                <Link to="/third-app" className='link'>Back</Link>
                </div>
            <div className='col-md-6 col-12' id="t2">
            <img src={thanks} alt="thans-img" className='thans-img'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Thanks;
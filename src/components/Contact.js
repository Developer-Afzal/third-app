import React from 'react'
import ContactForm from './ContactForm';
 const Contact = () => {
  return (
    <> 
    <div className='container p-5 text-center'>
      <div className='border border-3 m-5 p-4 col-md-8 mx-auto'>
        <h1>Contact US</h1>
      <ContactForm/>
      </div>
    </div>
  </>
  )
}

export default Contact;
import React from 'react'

 const Servicecomponent = (props) => {
  return (
    <div className='col-md-4 text-center mt-5 '>
    <div className='service-box'>
    <img src={props.img} className="icons"/><br/>
        <strong className='service-text'>{props.title}</strong><br/>
        <b>{props.list1}</b><br/>
        <b>{props.list2}</b><br/>
        <b>{props.list3}</b><br/>
    </div>   
    </div>
  )
}

export default Servicecomponent;
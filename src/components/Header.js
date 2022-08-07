import React from 'react'
import {Link} from 'react-router-dom';
import {useState, useRef} from 'react';
import logo from '../Images/logo.png';
import menu_icon from '../Images/menu-icon.png';
 const Header = () => {
  const [value, setvalue]=useState(true);
  const change = useRef();
  const  MenuBtn =()=>{
    setvalue(!value);
    console.log(value);
    if(value==true){
      console.log('display true');
      change.current.style.display="block";
      console.log(change.current);
    }
    if(value==false){
      change.current.style.display="none";
    }
  }
  

  return (
    <div className='nav'>
      <ul>
        <img src={logo} alt="logo" className="mobile-display"/>
        <img src={menu_icon} alt="logo" className=" left-menu"  onClick={MenuBtn}/>         
         <li className="list" ><Link to="/third-app" className='link'>Home</Link></li> 
         <li className="list" > <Link to="/About" className='link'>About</Link></li>
         <li className="list" ><Link to="/Services" className='link'>Services</Link></li>
         <li className="list" ><Link to="/Contact" className='link'>Contact US</Link></li>
      </ul>
      <ul ref={change} className="mobile-menu">
      <li><Link to="/third-app" className='link'>Home</Link></li> 
      <li><Link to="/About" className='link'>About</Link></li>
      <li><Link to="/Services" className='link'>Services</Link></li>
      <li><Link to="/Contact" className='link'>Contact US</Link></li>
      </ul>
    </div>
  );
 

}



export default Header;

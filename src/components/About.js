import React from "react";
import {userdata} from "../App";
import { useContext } from 'react';
import Service from '../Images/Service.png';

const About = () => {
const datavalues = useContext(userdata);

  return (
    <>
    <div className="container">
    <h1> Hello Friends, We are {datavalues}</h1> 
      <div className="col-md-12 ">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nostrum accusamus quae voluptatum qui dolorem voluptates sit iusto delectus vel, dolor, at aspernatur natus deserunt tenetur maxime vitae porro eveniet sapiente voluptate. Eligendi sapiente inventore deserunt ad sequi ullam id architecto a, magni fugit magnam ducimus, soluta in, obcaecati nemo!</p> 
      </div>
      <div className="row">
        <div className="col-md-6 col-12">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nostrum accusamus quae voluptatum qui dolorem voluptates sit iusto delectus vel, dolor, at aspernatur natus deserunt tenetur maxime vitae porro eveniet sapiente voluptate. Eligendi sapiente inventore deserunt ad sequi ullam id architecto a, magni fugit magnam ducimus, soluta in, obcaecati nemo!</p> 
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nostrum accusamus quae voluptatum qui dolorem voluptates sit iusto delectus vel, dolor, at aspernatur natus deserunt tenetur maxime vitae porro eveniet sapiente voluptate. Eligendi sapiente inventore deserunt ad sequi ullam id architecto a, magni fugit magnam ducimus, soluta in, obcaecati nemo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nostrum accusamus quae voluptatum qui dolorem voluptates sit iusto delectus vel, dolor, at aspernatur natus deserunt tenetur maxime vitae porro eveniet sapiente voluptate. Eligendi sapiente inventore deserunt ad sequi ullam id architecto a, magni fugit magnam ducimus, soluta in, obcaecati nemo!</p> 
        </div>
        <div className="col-md-6 col-12">
          <img src={Service} alt="service-img" className="Home-img"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
import React from 'react'
import './Floating.css'


const Floating = ({image,description,details}) => {



  return (
    <div className="FloatingDiv">
    <img src= {image} alt="" />
    <span>{description}<br/>{details}</span>
    
    </div>
  );
};

export default Floating


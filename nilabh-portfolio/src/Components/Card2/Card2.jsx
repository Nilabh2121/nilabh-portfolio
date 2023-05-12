import React from 'react'
import './Card2.css'

const Card2 = ({emoji,heading,detail,cgpa}) => {
  return (
    <div className="card2">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <span>{cgpa}</span>
    </div>
  )
}

export default Card2
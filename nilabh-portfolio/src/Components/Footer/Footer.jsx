import React from 'react'
import './Footer.css'
import wave from "../../img/wave.png"

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src= {wave} alt="" sgtyle={{width: '100%'}} />
        <div className="f-content">
            <span>nilabhkumar2121@gmail.com</span>
            <div className="f-icons">
                <Insta color='Black' size='3rem'/>
                <Linkedin color='Black' size='3rem'/>
                <Github color='black' size='3rem'/>

            </div>

            <span> Made with ❤️ By Nilabh Kumar</span> 
            
        </div>
    </div>
  )
}

export default Footer
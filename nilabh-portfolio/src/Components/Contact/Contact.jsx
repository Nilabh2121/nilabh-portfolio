import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context'
import { useContext } from 'react'

import { useRef } from 'react';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
        const form = useRef();
        
        const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_a4artbp', 'template_gdibls8', form.current, '0jsx_XC4Dh01rdfy_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

return (



    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="S-left">
                <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                <span> Contact ME</span>
                <div className='blur s-blur1'
                style={{background: "#ABF1FF94"}}>

                </div>
            </div>
        </div>

    <div className="c-right">
        <form ref ={form} onSubmit={sendEmail}>
            <input type='text' name ="user_name" className="user" placeholder='Name'/>
            <input type='email' name ="user_email" className="user" placeholder='Email'/>
            <textarea name ="message" className="user" placeholder='Message'/>
            <input type="submit" value="Send Message" className='button c-button'/>
            <div className='blur c-blur1'
                style={{background: "var(--purple)"}}>

                </div>
        </form>
    </div>
    </div>
  )
}

export default Contact
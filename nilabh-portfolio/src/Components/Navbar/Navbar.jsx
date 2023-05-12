import React from 'react'
import './Navbar.css'
import Toogle from '../Toogle/Toogle'


import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className ="n-wrapper">
        <div className="n-left">
            <div className="n-name">NILABH</div>
            <Toogle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to ='About' smooth={true}>
                        <li >About</li>
                    </Link>
                    <Link spy={true} to ='Myskill' smooth={true}>
                        <li>Myskill</li>
                    </Link>
                    <Link spy={true} to ='BarSkill' smooth={true}>
                        <li>BarSkill</li> 
                    </Link>
                    <Link spy={true} to ='Education' smooth={true}>
                        <li>Education</li>
                    </Link>
                    <Link spy={true} to ='Portfolio' smooth={true}>
                        <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to ='Testimonials' smooth={true}>
                        <li>Testimonials</li>
                    </Link>
                </ul>
            </div>
            <a href='../Contact.jsx'>
            <button className='button n-button'>
                Contact Us
            </button>
            </a>
            
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import './About.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin2.png';
import Instagram from '../../img/instagram2.png';
import DP from '../../img/DP.png';
import thumsup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png'
import Floating from '../FloatingDiv/Floating';
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'


const About = () => {

    const transition = { duration: 2, type: 'string'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="About" id='About'>
        <div className="A-left">
            <div className="A-name">
            <div className="blur" 
            style={{
                background:'#C1F5FF',
                top:'0rem',
                width:'12rem',
                height:'15rem',
                left:'-9rem'
            }}
            >
            </div>
                <span  style={{color: darkMode? 'white': ''}}>Hey! I Am</span>
                <span>Nilabh Kumar</span>
                <span  style={{color: darkMode? 'offwhite': ''}}>Web Developer with High Level
                    Of Experience in Product and Development
                    Producing The Quality Works Efficiently..
                </span>
            </div>

            <button className="button A-button">Hire Me</button>
            <div className="A-icons">
                <img src={Instagram} alt="" />
                <a href='https://github.com/Nilabh2121'><img src={Github} alt="" /></a>
                <img src={Linkedin} alt="" />
                
            </div>
        </div>
        <div className="A-right">
            <div className="glowingcircle">
                <span></span>
                <span></span>
                <div className="dp">
                    <img src={DP} alt="" />
                </div>
            </div>
            <motion.img 
            initial={{left: '-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            
            
            src={glassesimoji} alt="" />
            <div
        
            
            style={{top: '-4%', left:'68%'}}
            className='floating-div1'
            >

                <Floating image={Crown} description={'Web'} details={'Developer'}/>
            </div>
            <div style ={{top:'19rem' ,left: '0rem'}} className='floating-div2'>
                <Floating image={thumsup} description={'Programmer'} />
            </div>
            <div className="blur " style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" 
            style={{
                background:'#C1F5FF',
                top:'17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'
            }}
            >
            </div>
                
        </div>
    </div>
  )
}

export default About
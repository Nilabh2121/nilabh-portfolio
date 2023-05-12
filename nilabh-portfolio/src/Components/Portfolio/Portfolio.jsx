import React from 'react'
import './Portfolio.css'
import Charity from "../../img/bg2.jpeg"
import Web from "../../img/bg1.jpeg"
import Calci from "../../img/Project1.png"
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'


const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <section className ="portfolio" id='Portfolio'>
        <h2 className='heading'>
            <span style={{color: darkMode? 'white': ''}}>My Recent</span>
            <span>Projects</span>
            </h2>

        <div className="portfolio-container">
                <div className='portfolio-box'>
                    <img className='project'  src={Calci} alt=''/>
                    <div className='portfolio-layer'>
                        <h4>Neumorphic Calci</h4>
                        <p>Neumorphic Calculator is made in html Css and javascript</p>
                        <a href='https://nilabhmishra.netlify.app/' className='button'>Link</a>
                    </div>
                </div>

                <div className='portfolio-box'>
                    <img className='project'  src={Charity} alt=''/>
                    <div className='portfolio-layer'>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure officia molestiae neque</p>
                        <a href='https://github.com/Nilabh2121' className='button'>Github</a>
                    </div>
                </div>

                <div className='portfolio-box'>
                    <img className='project'  src={Web}  alt=''/>
                    <div className='portfolio-layer'>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure officia molestiae neque</p>
                        <a href='https://github.com/Nilabh2121' className='button'>Github</a>
                    </div>
                </div>

                <div className='portfolio-box'>
                    <img className='project'  src={Charity} alt=''/>
                    <div className='portfolio-layer'>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure officia molestiae neque</p>
                        <a href='https://github.com/Nilabh2121' className='button'>Github</a>
                    </div>
                </div>

                <div className='portfolio-box'>
                    <img className='project'  src={Web} alt=''/>
                    <div className='portfolio-layer'>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure officia molestiae neque</p>
                        <a href='https://github.com/Nilabh2121' className='button'>Github</a>
                    </div>
                </div>

                <div className='portfolio-box'>
                    <img className='project'  src={Charity} alt=''/>
                    <div className='portfolio-layer'>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure officia molestiae neque</p>
                        <a href='https://github.com/Nilabh2121' className='button'>Github</a>
                    </div>
                </div>
        </div>
    </section>
    
  )
}

export default Portfolio
import React from 'react'
import './Education.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Jaypee from "../../img/Jaypee.png";
import Aklank from "../../img/Aklank.jpg";
import DAV from "../../img/DAV.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css';
import { themeContext } from '../../Context'
import { useContext } from 'react'


const  Education = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const clients = [
        {
            img:Jaypee,
            review: "Jaypee University of Enginnering and Technology ",
            Boards: "B.tech in Computer Science and Engineering", 
            cgpa:"(2020-2024) CGPA = 8.4",         
        },
        {
            img:Aklank,
            review: "Aklank Public School Kota Rajasthan",
            Boards: " 12th CBSE BOARDS ",
            cgpa:"(2017-2019)",
        },
        {
            img:DAV,
            review: "GD D.A.V Public School Satar Rd  B.Deoghar",
            Boards: " 10th CBSE BOARDS ",
            cgpa:"(2006-2017) CGPA = 9.4",
        },
    ]
  return (
    <div className="E-wrapper" id='Education'>
        <div className="E-heading">
        <span>Education</span>
        <span>Details</span>
        
        </div>
    <div className='blur E-blur1' style={{background: "var(--purple)"}}></div>
    <div className='blur E-blur2' style={{background: "#C1F5FF"}}></div>

    <Swiper style={{color: darkMode? 'white': ''}}

        modules={[Pagination]}
        slidesPerView={1}
        pagination  = {{ clickable: true }}
        

        >
        {clients.map((clients,index)=>{
            return (
                <SwiperSlide key ={index}>
                    <div className='Education'>
                    <img src={clients.img} alt=''/>
                    <span   style={{color: darkMode? 'white': ''}}>{clients.review}</span>
                    <span>{clients.Boards}</span>
                    <span>{clients.cgpa}</span>
                    </div>
                </SwiperSlide>
            )

            })}

    </Swiper>
    </div>
  )
}

export default Education
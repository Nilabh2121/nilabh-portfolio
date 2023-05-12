import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";
import profilepic5 from "../../img/profile5.jpg";
import profilepic6 from "../../img/profile6.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css';
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Testimonials = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const clients = [
        {
            img:profilepic1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit pariatur eveniet eligendi assumenda quae accusantium non? Nam nihil error veniam voluptate, quibusdam provident debitis quod, suscipit esse officia rerum",
        },
        {
            img:profilepic2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit pariatur eveniet eligendi assumenda quae accusantium non? Nam nihil error veniam voluptate, quibusdam provident debitis quod, suscipit esse officia rerum",
        },
        {
            img:profilepic3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit pariatur eveniet eligendi assumenda quae accusantium non? Nam nihil error veniam voluptate, quibusdam provident debitis quod, suscipit esse officia rerum",
        },
        {
            img:profilepic4,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit pariatur eveniet eligendi assumenda quae accusantium non? Nam nihil error veniam voluptate, quibusdam provident debitis quod, suscipit esse officia rerum",
        },
        {
            img:profilepic5,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit pariatur eveniet eligendi assumenda quae accusantium non? Nam nihil error veniam voluptate, quibusdam provident debitis quod, suscipit esse officia rerum",
        },
        {
            img:profilepic6,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit pariatur eveniet eligendi assumenda quae accusantium non? Nam nihil error veniam voluptate, quibusdam provident debitis quod, suscipit esse officia rerum",
        },
    ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
        <span>People Always get</span>
        <span>Exceptional Work</span>
        <span> from me....</span>
        </div>
    <div className='blur t-blur1' style={{background: "var(--purple)"}}></div>
    <div className='blur t-blur2' style={{background: "#C1F5FF"}}></div>

    <Swiper style={{color: darkMode? 'red': ''}}

        modules={[Pagination]}
        slidesPerView={1}
        pagination = {{ clickable: true }}

        >
        {clients.map((clients,index)=>{
            return (
                <SwiperSlide key ={index}>
                    <div className='testimonials'>
                    <img src={clients.img} alt=''/>
                    <span style={{color: darkMode? 'white': ''}}>{clients.review}</span>
                    </div>
                </SwiperSlide>
            )

            })}

    </Swiper>
    </div>
  )
}

export default Testimonials
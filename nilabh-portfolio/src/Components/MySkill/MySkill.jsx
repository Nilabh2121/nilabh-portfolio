import React from 'react'
import './MySkill.css'
import Heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume_Nilabh.pdf';





const skills = () => {
    
    
   
  return (
    <div className="skills" id='Myskill'>
        
        <div className="S-left">
            <span >My Skills</span>
            <span>Lists</span>
            <br/><br/>
            <span>1. WEB DEVELOPMENT : Proficient in HTML,CSS<br/> 
                  and JavaScript.Experienced in building<br/> 
                  responsive and accessible websites using<br/>
                  Bootstrap and other frameworks like React Js.<br/>
                  Skilled in using modern back-end Technologies<br/>
                   like NodeJs, ExpessJS, MongoDB, API etc.<br/>
                  <br/>
                  <br/>

                 2. DSA : Strong knowledge of data structures Such as<br/>
                 Arrays, Linked lists, Stacks, Queues, Trees.<br/>
                 Experienced in implementing algorithms such as<br/>
                 sorting, searching and Graph Algorithms<br/> 
                 Skilled in analyzing time and space complexity <br/>
                of algorithms and solving complex problems .<br/>
            </span>
            <a href={Resume} download>
            <button className="button s-button">Download Resume</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94"}}></div>

        </div>
        
        <div className="SC-right">
            <div style ={{left:'18rem'}}>
                <Card
                emoji = {Heartemoji} 
                heading ={'Web Development'}
                detail ={"HTML,CSS,JavaScript, React.js,Node.js, MongoDB,API,SQL"}
                />
            </div>

            <div style ={{top: "10rem", left:' -1rem'}}>
                <Card
                emoji = {glasses} 
                heading ={'Data Structures'}
                detail ={"Array,Recurssion, LinkedList,Stack,Queue, Trees,Graph,DP"}
                />
            </div>

            <div style ={{top: "19rem", left:'15rem'}}>
                <Card
                emoji = {Humble} 
                heading ={'Tools'}
                detail ={"VS code  , Ms Excel  , Android Studio  , Canva "}
                />
            </div>
            <div className="blur s-blur2" style={{background:"var(--purple)"}}>

            </div>



        </div>
    </div>
  )
}

export default skills
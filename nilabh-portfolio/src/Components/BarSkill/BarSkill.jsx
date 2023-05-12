import React from 'react'
import './BarSkill.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'


const BarSkill = () => {

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="barskill" id="BarSkill">
     
      <div className='Bs-left'>
      <span style={{color: darkMode? 'white': ''}}>Skills</span><br/>
      <span>Percentage</span>
      <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

      </div>
    <div className='Bs-right'>
    <div className="Achievement">
       <div className="circle">80%</div>
       <span>Web Dev</span>
       <span></span>
     </div>
     <div className="Achievement">
       <div className="circle">70%</div>
       <span>DSA</span>
       <span></span>
     </div>
     <div className="Achievement">
       <div className="circle">85%</div>
       <span>C++</span>
       <span></span>
     </div>
     <div className="Achievement">
       <div className="circle">60%</div>
       <span>Python</span>
       <span></span>
     </div>
     <div className="Achievement">
       <div className="circle">60%</div>
       <span>JAVA</span>
       <span></span>
     </div>
    
    
    </div>  
    </div>
  )
}

export default BarSkill
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import About from "./Components/About/About";
import MySkill from "./Components/MySkill/MySkill";
import BarSkill from "./Components/BarSkill/BarSkill";
import Education from "./Components/Education/Education";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";



function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"

    style={{
      background : darkMode? 'black' : '',
      color :darkMode? 'white' : ''
    }}
    
    
    >
      <Navbar/>
      <About/>
      <MySkill/>
      <BarSkill/>
      <Education/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}


export default App;

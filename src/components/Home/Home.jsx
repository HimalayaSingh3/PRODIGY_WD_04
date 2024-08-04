import React from 'react'
import dp from './images/pic.png'
import './Home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'


const Home = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    
    <div class="head1">
      <img src={dp} data-aos="fade-down"/>
                <h1 data-aos="fade-up">I'm <span class="name">Himalaya</span> Singh,<br></br> Software Developer in <span class="in">In</span><span class="d">d</span><span class="ia">ia</span>.</h1>
                <p>I am a versatile developer with a robust and diverse skill set, I thrive on tackling a wide array of technical challenges and continuously expanding my expertise.</p>
        <div class="resume">Download Resume</div>
    </div>
  )
}

export default Home

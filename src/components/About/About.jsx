import React from 'react'
import about from './images/ban.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import './About.css'

const About = () => {
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <div id="about">
    <div class="container">
        <div class="row">
            <div class="col1">
                <img src={about}/>
            </div>
            <div class="col2">
                <p>As a versatile developer with a robust and diverse skill set, I thrive on tackling a wide array of technical challenges and continuously expanding my expertise. My journey in the world of software development has equipped me with proficiency in multiple programming languages, development paradigms, and cutting-edge tools, enabling me to adapt swiftly to various roles and project demands.</p>
                <div class="tab-contents" id="experience">
                    <h2>EXPERIENCE</h2>
                    <ul>
                        <li><span>Web Developer Intern</span><br/>OctaNet Services Pvt Ltd.</li>
                    </ul>
                </div>
                <div class="tab-contents" id="education">
                    <h2>EDUCATION</h2>
                    <ul>
                        <li><span>2020</span><br/>Completed 10<sup>th</sup> From Kendriya Vidhyalaya</li>
                        <li><span>2022</span><br/>Completed 12<sup>th</sup> From Kendriya Vidhyalaya</li>
                        <li><span>2025</span><br/>BCA From Shri Siddhi Vinayak Group of Institute</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About

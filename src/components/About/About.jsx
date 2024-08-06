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
    <div className="container">
        <div className="row">
            <div className="col1" data-aos="fade-down">
                <img src={about}/>
            </div>
            <div className="col2">
                <p data-aos="fade-up">As a versatile developer with a robust and diverse skill set, I thrive on tackling a wide array of technical challenges and continuously expanding my expertise. My journey in the world of software development has equipped me with proficiency in multiple programming languages, development paradigms, and cutting-edge tools, enabling me to adapt swiftly to various roles and project demands.</p>
                <div className="tab-contents" id="experience" data-aos="fade-up">
                    <h2>EXPERIENCE</h2>
                    <ul>
                        <li><span>Web Developer Intern</span><br/>OctaNet Services Pvt Ltd.</li>
                    </ul>
                </div>
                <div className="tab-contents" id="education" data-aos="fade-up">
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

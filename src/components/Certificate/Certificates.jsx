import React from 'react'
import {useEffect} from 'react'
import ai from './certificates/ai.png'
import java from './certificates/java.png'
import node from './certificates/node.png'
import chat from './certificates/chat.png'
import react from './certificates/react.png'
import python from './certificates/python.jpg'
import postman from './certificates/postman.png'
import sql from './certificates/sql.jpeg'
import se from './certificates/se.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Certificates.css'


const Certificates = () => {
   
  return (
    <div className="certificate">
        <div className="cert"
        data-aos="fade-up">
           <h3>SOFTWARE ENGINEERING</h3>
            <img src={se}/>
        </div>
        <div className="cert"
        data-aos="fade-up">
           <h3>SQL</h3>
            <img src={sql}/>
        </div>
        <div className="cert"
        data-aos="fade-up">
           <h3>API BOOTCAMP</h3>
            <img src={postman}/>
        </div>
       <div className="cert"
       data-aos="fade-up">
           <h3>GENERATIVE AI STUDIO</h3>
            <img src={ai}/>
        </div>
        <div className="cert"
        data-aos="fade-up">
            <h3>JAVA PROGRAMMING</h3>
            <img src={java}/>
        </div>
        <div className="cert"
        data-aos="fade-up">
            <h3>NODE JS</h3>
            <img src={node}/>
        </div>
        <div className="cert"
        data-aos="fade-up">
            <h3>REACT AND REDUX</h3>
            <img src={react}/>
        </div>
        <div className="cert"
        data-aos="fade-up">
            <h3>CHATGPT FOR BEGINNERS</h3>
            <img src={chat}/>
        </div>
        <div className="cert" id="python"
        data-aos="fade-up">
            <h3>PYTHON</h3>
            <img src={python}/>
        </div>
    </div>
  )
}

export default Certificates
